const express = require('express');
const mongoose = require('mongoose');
const modelControllers = require('./controllers/collections.js');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const Client = require('./models/client');

const app = express();
const url = 'mongodb://localhost:27017/CleaningServices';
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (err) {
    return console.log(err);
  }
  app.listen(port, () =>
  console.log(`Server was started on port ${port}`));
});

app.get('/clients', modelControllers.getAll);
app.get('/companies', modelControllers.getAll);

app.get('/clients/:id', modelControllers.getByID);
app.get('/companies/:id', modelControllers.getByID);

app.post('/clients', modelControllers.add);
app.post('/companies', modelControllers.add);

app.put('/clients/:id', modelControllers.update);
app.put('/companies/:id', modelControllers.update);

app.delete('/clients/:id', modelControllers.delete);
app.delete('/companies/:id', modelControllers.delete);
