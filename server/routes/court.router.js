const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here

  let queryText = 'SELECT * FROM "court";';
  pool.query(queryText).then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  }).catch((err) => {
    console.log("error request: ", err);
    res.sendStatus(500);
  });
});

///dynamic 
router.delete('/favCourt/:id', (req, res) => {
  // Delete route code here
  let courtID = req.params.id;
  let userID = req.user.id;
  let queryText = `DELETE from "favCourt" WHERE "id" = $1 and "user_id" = $2;`
  pool.query(queryText, [courtID, userID]).then((result) => {
    console.log(result.rows);
    res.sendStatus(200);
  }).catch((err) => {
    console.log("error request: ", err);
    res.sendStatus(500);
  });
});

router.get('/favCourt', (req, res) => {
  // GET route code here
  let userID = req.user.id;
  let queryText = 'SELECT * FROM "favCourt" WHERE "user_id" = $1;';
  pool.query(queryText, [userID]).then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  }).catch((err) => {
    console.log("error request: ", err);
    res.sendStatus(500);
  });

})

router.post('/create/favCourt', (req, res) => {
    // POST route code here
    let userID = req.user.id;
    let courtName = req.body;
    console.log(courtName);
  let queryText = `INSERT INTO "favCourt" ("name", "user_id")
  values ($2, $1);`;
  pool.query(queryText, [userID, courtName.courtname]).then((result) => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log("error request: ", err);
    res.sendStatus(500);
  });
  });

/**
 * POST route template
 */
// router.post('/', (req, res) => {
//   // POST route code here
// });

module.exports = router;
