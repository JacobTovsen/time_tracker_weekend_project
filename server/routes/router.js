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


module.exports = router;