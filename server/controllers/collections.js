const Client = require('../models/client');
const ObjectID = require('mongodb').ObjectID;
const postService = require('../message_service/messanger');

exports.getAll = (req, res) => {
  Client.find((err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    postService.postService();
    res.send(docs);
  });
};

exports.getByID = (req, res) => {
  Client.findById({_id: ObjectID(req.params.id)}, (err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

exports.getByValue = (req, res) => {
  const value = req.params.value;
  console.log(value);
  Client.find({$or: [{email: value}, {phone: value}]}, (err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

exports.update = (req, res) => {
  const updatedData = req.body;
  Client.updateOne({_id: ObjectID(req.params.id)}, updatedData, (err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
//
exports.delete = (req, res) => {
  Client.deleteOne({_id: ObjectID(req.params.id)}, (err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
//
exports.add = (req, res) => {
  const newItem = new Client(req.body);
  newItem.save(err => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(newItem);
  });
};
