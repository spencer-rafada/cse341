const { check } = require(`express-validator`);

const colors = [`red`, `blue`, `yellow`];

exports.contactValidation = [
  check(`firstName`, `First name is required.`).notEmpty(),
  check(`lastName`, `Last name is required.`).notEmpty(),
  check(`email`, `Email is not valid`)
    .notEmpty()
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check(`favoriteColor`, `Color is not a valid color`).isIn(colors),
  check(`birthday`, `Birthday is not a valid birthday`).notEmpty().isISO8601().toDate()
];
