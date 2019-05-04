const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;
const routes = require('./routes/routes.js');
const MongoConnector = require('./libs/Mongo');
const bodyParser = require('body-parser');

// Connect to database
MongoConnector.initDb();

// Initialize template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Middlewares
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use('/', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
