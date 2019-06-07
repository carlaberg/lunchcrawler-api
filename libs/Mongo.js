const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

const MongoConnector = () => {
    
    let dbInstance = {};
    
    function setConnectionString() {
        const {
            NODE_ENV,
            MONGO_USERNAME,
            MONGO_PASSWORD,
            MONGO_HOSTNAME,
            MONGO_PORT,
            MONGO_DB
        } = process.env;
        
        // Connect to mongodb without authentication in development
        if ( process.env.NODE_ENV == 'development') {
            return `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
        } else {
            return `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
        }
    }

    function initDb() {
        const url = setConnectionString();
        
        MongoClient.connect(url, function(err, database) {
          assert.equal(null, err);
          dbInstance = database.db('lunchcrawler-api');
          console.log("Connected successfully to database");
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
