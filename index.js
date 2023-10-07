const express = require("express");
const app = express();
const port = 3003;
const dvdrental = require("./dvdRental/router.js");

const pool = require("./queries.js");

app.use("/dvdrental", dvdrental);

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  }
  console.log("Database Connected.");
});

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});