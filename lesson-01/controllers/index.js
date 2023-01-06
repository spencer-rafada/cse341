const getNames = (req, res, next) => {
  console.log("hello");
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
};

module.exports = { getNames };
