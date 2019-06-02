const MongoConnector = require('../libs/Mongo');
const Todo = require('../models/Lunch');
const { crawl } = require('../libs/LunchCrawler');

exports.getAll = (req, res, next) => {
    MongoConnector.getDb()
        .collection('lunches')
        .find({})
        .toArray((err, result) => {
            if (err) {
                res.status(400).send({ error: err });
                console.log();
            } else if (result === undefined || result.length === 0) {
                res.status(400).send({ error: 'No lunches in database' });
            } else {
                res.status(200).json(result);
            }
        });
};

exports.crawl = async (req, res, next) => {
    const lunches = await crawl();
    console.log(lunches);
    const db = MongoConnector.getDb();
    
    const result = await db.collection('lunches').remove();
    
    db.collection('lunches')
    .insertMany([...lunches],
        (err, result) => {
            if (err) {
                res.status(400).send({ error: err });
            }
            res.status(200).send(result);
        }
    );
};