const routes = require("express").Router();

const contactController = require("../controllers/contacts");

// Routes are here
routes.get("/", contactController.getContacts);

routes.get("/search", contactController.searchContact);

routes.get("/:id", contactController.getSingle);

module.exports = routes;
