const MongoConnector = require('../libs/Mongo');

exports.getAll = ( req, res, next ) => {
    MongoConnector.getDb().collection('todos').find({}).toArray((err, result) => {
        if (err) {
            res.status(400).send({'error': err});
            console.log();
        } else if (result === undefined || result.length === 0) {
            res.status(400).send({'error':'No todos in database'})
        } else {
            res.status(200).send(result);
        }
    });
}

// router.get('/todos/:id', (req, res, next) => {
//   req.app.locals.db.collection('documents').findOne({
//     '_id': req.params.id
//   }, (err, result) => {
//     if (err) {
//       res.status(400).send({'error': err})
//     }
//     if (result === undefined) {
//       res.status(400).send({'error':'No document matching that id was found'})
//     } else {
//       res.status(200).send(result)
//     }
//   })
// })
//
// router.post('/todos/new', (req, res, next) => {
//   const newDocument = new Document(req.body.title, req.body.username, req.body.body)
//   req.app.locals.db.collection('documents').insertOne({
//     newDocument
//   }, (err, result) => {
//     if (err) {
//       res.status(400).send({'error': err})
//     }
//     res.status(200).send(result)
//   })
// })
//
// router.delete('/todos/delete/:id', (req, res, next) => {
//   req.app.locals.db.collection('documents').deleteOne({
//     '_id': req.params.id
//   }, (err, result) => {
//     if (err) {
//       res.status(400).send({'error': err})
//     }
//     res.status(200).send(result)
//   })
// })
//
// router.patch('/todos/edit/:id', (req, res, next) => {
//   req.app.locals.db.collection('documents').updateOne({
//     '_id': req.params.id
//   },
//   {$set:
//     {
//       title: req.body.title,
//       username: req.body.username,
//       body: req.body.body
//     }
//   }, (err, result) => {
//     if (err) {
//       res.status(400).send({'error': err})
//     }
//     res.status(200).send(result)
//   })
// })
