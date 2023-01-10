var express = require("express");
var app = express();
const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");

const port = process.env.PORT || 3000;

const main = async () => {
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  main();
});
