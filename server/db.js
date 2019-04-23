const MongoClient = require('mongodb').MongoClient;
const state = {
  db: null
};


exports.connect = (url, done) => {
  if (state.db) {
    return done();
  }
  MongoClient.connect(url, (err, db) => {
    if (err) {
      return done(err);
    }
    console.log(db);
    state.db = db('clients');
    done();
  });
};

exports.get = () => state.db;
