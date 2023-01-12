const routes = require("express").Router();

const professionalController = require("../controllers");

// Insert Routes Here
routes.get("/professional", professionalController.getData);

module.exports = routes;
