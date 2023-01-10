var express = require("express");
var app = express();
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

const main = async () => {
  dotenv.config();
  const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pgivobk.mongodb.net/?retryWrites=true&w=majority`;
  console.log(connectionString);
  const client = new MongoClient(connectionString);

  try {
    await client.connect();
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

const listDatabases = async (client) => {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases: ");
  databasesList.databases.forEach((db) => {
    console.log(` - ${db.name}`);
  });
};

app.listen(3000, () => {
  main();
});
