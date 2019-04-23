// const db = require('../db.js');
// const ObjectID = require('mongodb').ObjectID;
//
// exports.getAll = (collection, callback) => {
//   db.get().collection(collection).find().toArray((err, docs) => {
//     callback(err, docs);
//   });
// };
//
// exports.getByID = (collection, id, callback) => {
//   db.get().collection(collection).findOne({_id: ObjectID(id)}, (err, docs) => {
//     callback(err, docs);
//   });
// };
//
// exports.update = (collection, id, newData, callback) => {
//   db.get().collection(collection).updateOne(
//     {_id: ObjectID(id)},
//     {$set: newData},
//     (err, result) => {
//     callback(err, result);
//   });
// };
//
// exports.delete = (collection, id, callback) => {
//   db.get().collection(collection).deleteOne({_id: ObjectID(id)}, (err, result) => {
//       callback(err, result);
//     });
// };
//
// exports.add = (base, data, callback) => {
//   db.get().collection(base).insertOne(data, (err, result) => {
//     callback(err,  result);
//   });
// };
