require('dotenv').config();
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

const MongoConnector = () => {

    const url = 'mongodb://localhost:27017/node-mongo-docker';

    let dbInstance = {};

    function initDb() {
        MongoClient.connect(url, function(err, database) {
          assert.equal(null, err);
          dbInstance = database.db('node-mongo-docker');
          console.log("Connected successfully to server");

          // database.close();
        });
    }

    function getDb() {
        return dbInstance;
    }

    return Object.freeze({
        initDb,
        getDb
    });

}

module.exports = MongoConnector();
