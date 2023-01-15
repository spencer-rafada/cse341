const mongodb = require("../db/connect");
var ObjectId = require("mongodb").ObjectId;

const getContacts = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db("cse341")
    .collection("contacts")
    .find();

  console.log(result);
  result.toArray().then((items) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(items);
  });
};

const getSingle = async (req, res, next) => {
  var o_id = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("cse341")
    .collection("contacts")
    .find({ _id: o_id });

  result.toArray().then((items) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(items);
  });
};

const searchContact = async (req, res, next) => {
  var o_id = new ObjectId(req.query.id);
  const result = await mongodb
    .getDb()
    .db("cse341")
    .collection("contacts")
    .find({ _id: o_id });
  result.toArray().then((items) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(items);
  });
};

module.exports = { getContacts, getSingle, searchContact };
