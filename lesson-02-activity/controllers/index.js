const mongodb = require("../db/connect");

const getData = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db("cse341")
    .collection("professional")
    .findOne();
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(result);
};

module.exports = { getData };
