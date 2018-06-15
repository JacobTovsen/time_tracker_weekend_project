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
})

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
})

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
})


module.exports = router;