const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here

  let queryText = 'SELECT * FROM "user";';
  pool.query(queryText).then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  }).catch((err) => {
    console.log("error request: ", err);
    res.sendStatus(500);
  });
});

router.put('/win', (req, res) => {
  // GET route code here
  let playerID = req.body
  console.log("in put", req.body);
  let queryText = `UPDATE "user"
  set "wins" = "wins" + 1
  WHERE "id" = $1;`
  pool.query(queryText, [playerID.id]).then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  }).catch((err) => {
    console.log("error request: ", err);
    res.sendStatus(500);
  });

  
});

router.put('/loss', (req, res) => {
  // GET route code here
  let playerID = req.body
  let queryText = `UPDATE "user"
  set "losses" = "losses" + 1
  WHERE "id" = $1;`
  pool.query(queryText, [playerID.id]).then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  }).catch((err) => {
    console.log("error request: ", err);
    res.sendStatus(500);
  });
});
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
