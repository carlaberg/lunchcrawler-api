require('dotenv').config();
const express = require('express');
const assert = require('assert');
const app = express();
const port = 3000;
const routes = require('./routes/routes.js');
const MongoConnector = require('./libs/Mongo');
const bodyParser = require('body-parser');

// Connect to database
MongoConnector.initDb();

// Middlewares
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
