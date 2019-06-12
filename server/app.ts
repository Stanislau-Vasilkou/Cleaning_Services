const express = require('express');
const mongoose = require('mongoose');
const modelControllers = require('./controllers/collections.js');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const session = require('express-session');
const delay = require('express-delay');
const googleSetup = require('./auth/google');
const facebookSetup = require('./auth/facebook');


const app = express();
const url = 'mongodb://localhost:27017/CleaningServices';
const port = 3000;

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
  if (err) {
    return console.log(err);
  }
  app.listen(port, () =>
    console.log(`Server was started on port ${port}`));
});
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;


require('./auth/auth');

app.use(delay(1000, 3000));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   next();
// });

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-route');

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error : err });
});

app.use('/', routes);
app.use('/user', passport.authenticate('jwt', { session : false }), secureRoute );

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
