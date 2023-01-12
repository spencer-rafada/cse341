const mongodb = require("../db/connect");

// Local Variable for Testing
const myData = {
  professionalName: "Spencer Rafada",
  img: "../frontend/img/blue heart springs.jpeg",
  nameLink: {
    firstName: "Spencer",
    lastName: "Rafada",
    url: "https://github.com/spencer-rafada",
  },
  primaryDescription:
    "Software Engineering Student looking for Job Opportunities",
  workDescription1: "QA",
  workDescription2: "SW Developer",
  linkTitleText: "Contact Me",
  linkedInLink: {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/spencer-rafada/",
  },
  githubLink: { text: "GitHub", link: "https://github.com/spencer-rafada" },
};

const getData = (req, res, next) => {
  res.json(myData);
};

module.exports = { getData };
