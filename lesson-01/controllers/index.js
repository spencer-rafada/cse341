const getAuthor = (req, res, next) => {
  res.json("Spencer Rafada");
};

const sayHello = (req, res, next) => {
  res.json("Hello, test out /author, /fiancee, author and /parents");
};

const getFiancee = (req, res, next) => {
  res.json("Hana Ko");
};

const getBrother = (req, res, next) => {
  res.json("Michael Rafada");
};

const getParents = (req, res, next) => {
  res.json(["Nelson Rafada", "Gina Rafada"]);
};

module.exports = { getAuthor, sayHello, getFiancee, getBrother, getParents };
