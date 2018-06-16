const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/project', (req, res) => {
    console.log('In router project GET');
    const queryText = `SELECT * FROM project`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error getting projects:', error);
            res.sendStatus(500);
        })
}) // end router project GET

router.get('/entry', (req, res) => {
    console.log('In router entry GET');
    const queryText = `SELECT * FROM entry`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error getting projects:', error);
            res.sendStatus(500);
        })
}) // end router entry GET

router.delete('/entry/:id', (req, res) => {
    const id = req.params.id;
    console.log('in router DELETE to delete');
    const queryText = 'DELETE FROM entry WHERE id=$1';
    console.log('this is the queryText:', queryText);
    pool.query(queryText, [id])
        .then((results) => {
            console.log('successful entry delete', results);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error deleting power:', error);
            res.sendStatus(500);
        })
}) // end entry DELETE

router.post('/entry', function( req, res){
    console.log('In entry POST to create', req.body);
    const queryText = `INSERT INTO entry (entry, project, date, hours)
    VALUES($1, $2, $3, $4)`;
    console.log(queryText);
    pool.query(queryText, [req.body.entry, req.body.project, req.body.date, req.body.hours])
        .then( (result) => {
            console.log('back from db with:', result );
            res.sendStatus(200);
        }).catch((error) => {  
            console.log('error in entry POST', error);
            res.sendStatus(500);
        })
}) // end entry POST

router.post('/project', function( req, res){
    console.log('In project POST to create', req.body);
    const queryText =`INSERT INTO project (name)
    VALUES($1)`;
    console.log(queryText);
    pool.query(queryText, [req.body.name])
        .then( (result) => {
            console.log('back from db with:', result );
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error in project POST', error);
            res.sendStatus(500);
        })
}) // end project POST

module.exports = router;