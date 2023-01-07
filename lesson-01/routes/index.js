const routes = require("express").Router();

const myController = require("../controllers");

routes.get("/", myController.sayHello);

routes.get("/author", myController.getAuthor);

routes.get("/fiancee", myController.getFiancee);

routes.get("/brother", myController.getBrother);

routes.get("/parents", myController.getParents);

module.exports = routes;
