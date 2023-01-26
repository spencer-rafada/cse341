const mongodb = require('../db/connect');
var ObjectId = require('mongodb').ObjectId;

// GET Requests
const getContacts = async (req, res, next) => {
  // #swagger.description = 'Gets all of the contacts from the database.'
  const result = await mongodb.getDb().db('cse341').collection('contacts').find();

  // console.log(result);
  result.toArray().then((items) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(items);
  });
};

const getSingle = async (req, res, next) => {
  // #swagger.description = 'Finds contact with the given id using routes parameters.'
  var o_id = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('cse341').collection('contacts').find({ _id: o_id });

  (await result.count()) > 0
    ? result.toArray().then((items) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(items);
      })
    : res.status(200).json({ message: `No document found.` });
};

const searchContact = async (req, res, next) => {
  // #swagger.description = 'Finds contact with the given id using query parameters.'
  var o_id = new ObjectId(req.query.id);
  const result = await mongodb.getDb().db('cse341').collection('contacts').find({ _id: o_id });
  result.toArray().then((items) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(items);
  });
};

// POST requests
const addContact = async (req, res, next) => {
  // #swagger.description = 'Adds a contact to the database.'
  // #swagger.consumes = ['application/json']
  /* #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Contact schema',
    required: true,
    schema: {
      $firstName: 'John',
      $lastName: 'Doe',
      $email: 'jdoe@gmail.com',
      $favoriteColor: 'red',
      $birthday: '01-25-2023'
    },
  }
  */
  try {
    const contact = JSON.parse(req.body);
    const result = await mongodb.getDb().db('cse341').collection('contacts').insertOne(contact);
    res.setHeader(`Content-Type`, `application/json`);
    result
      ? res
          .status(201)
          .json({ message: 'Document added successfully', docId: result.insertedId.toString() })
      : res.status(404).json({ message: 'Document not added' });
  } catch (error) {
    console.log(error);
  }
};

// PUT requests
const updateContact = async (req, res, next) => {
  // #swagger.description = 'Finds a contact using the id parameter and updates the contact with the given fields in the body of the request.'
  // #swagger.consumes = ['application/json']
  /* #swagger.parameters['obj'] = {
    in: 'body',
    description: 'Updates all of the fields indicated from the body',
    schema: {
      $firstName: 'Jane',
      $lastName: 'Mae',
    },
  }
  */
  try {
    const o_id = new ObjectId(req.params.id);
    const _ = await mongodb
      .getDb()
      .db('cse341')
      .collection('contacts')
      .updateOne({ _id: o_id }, { $set: req.body })
      .then((result) => {
        res.setHeader(`Content-Type`, `application/json`);
        result.modifiedCount > 0
          ? res.status(204).send()
          : res.status(404).json({ message: `No document updated` });
      });
  } catch (err) {
    console.log(err);
  }
};

// DELETE requests
const deleteContact = async (req, res, next) => {
  // #swagger.description = 'Finds a contact using the id parameter and deletes the contact with the same id.'
  try {
    const o_id = new ObjectId(req.params.id);
    const _ = await mongodb
      .getDb()
      .db('cse341')
      .collection('contacts')
      .deleteOne({ _id: o_id }, {})
      .then((result) => {
        result.deletedCount > 0
          ? res
              .status(200)
              .json({ message: `Document with ID: ${req.params.id} successfully deleted.` })
          : res.status(404).json({ message: 'No document deleted' });
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getContacts,
  getSingle,
  searchContact,
  addContact,
  updateContact,
  deleteContact
};
