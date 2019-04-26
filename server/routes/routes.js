const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Client = require('../models/client');

const router = express.Router();

router.post('/signup', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
  Client.findOne({email: req.body.email}, (err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
});

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, client, info) => {     try {
    if (err || !client) {
      const error = new Error('An Error occured');
      return next(error);
    }
    req.login((client), { session : false }, async (error) => {
      if ( error ) return next(error)
      const body = { _id : client._id, email : client.email };
      const token = jwt.sign({ client : body }, 'top_secret');
      return res.json( {token} );
    });     } catch (error) {
    return next(error);
  }
  })(req, res, next);
});

module.exports = router;
