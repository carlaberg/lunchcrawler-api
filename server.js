const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/routes.js');
const MongoConnector = require('./libs/Mongo');
const { crawl } = require('./libs/LunchCrawler');
const bodyParser = require('body-parser');
const lunchController = require('./controllers/lunchController');
const cron = require('node-cron');

// Connect to database
// MongoConnector.initDb();

// Middlewares
app.use(bodyParser.json());
app.use('/', routes);

// Fetch lunches 08:00 mon - fri with cron job
// cron.schedule('0 8 * * 1-5', async () => {
//     const lunches = await crawl();
//     const db = MongoConnector.getDb();
// 
//     const result = await db.collection('lunches').remove();
// 
//     db.collection('lunches')
//     .insertMany([...lunches],
//         (err, result) => {
//             if (err) {
//                 console.error(err);
//             }
//             console.log('Lunches successfully saved to database');
//         }
//     );
// 
// });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// Bing bong
module.exports = app;
