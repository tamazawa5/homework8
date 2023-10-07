var pool = require("../queries.js");
var fs = require("fs");

const seedQuery = fs.readFileSync("db/seeding.sql", { encoding: "utf-8" });
pool.query(seedQuery, (err, results) => {
  if (err) {
    console.log(err);
  }
  console.log("seeding completed.");
  pool.end();
});