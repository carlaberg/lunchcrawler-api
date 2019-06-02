require('dotenv').config();
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

const MongoConnector = () => {

    const url = 'mongodb://localhost:27017/lunchcrawler-api';

    let dbInstance = {};

    function initDb() {
        MongoClient.connect(url, function(err, database) {
          assert.equal(null, err);
          dbInstance = database.db('lunchcrawler-api');
          console.log("Connected successfully to server");
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
