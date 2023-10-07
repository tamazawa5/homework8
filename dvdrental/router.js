const express = require("express");
const router = express();
const pool = require("../queries.js");

router.get("/films", (req, res) => {
  pool.query("SELECT*FROM film LIMIT 10", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(result.rows);
  });
});

router.get("/film/:id", (req, res) => {
  pool.query(
    `SELECT*FROM film WHERE film_id=${req.params.id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json(result.rows);
    }
  );
});

router.get("/films/categories", (req, res) => {
  pool.query("SELECT*FROM category", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(result.rows);
  });
});

router.get("/film/category/:id", (req, res) => {
  pool.query(
    `SELECT*FROM film f INNER JOIN film_category fc on f.film_id=fc.film_id INNER JOIN category c on c.category_id=fc.category_id WHERE c.category_id=${req.params.id} LIMIT 5`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json(result.rows);
    }
  );
});

module.exports = router;
