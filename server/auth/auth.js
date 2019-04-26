const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const ClientModel = require('../models/client');

passport.use('signup', new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  try {
    const name = req.body.name || null;
    const phone = req.body.phone || null;
    const client = await ClientModel.create({ email, password, phone, name });
    return done(null, client);
  } catch (error) {
    done(error);
  }
}));

passport.use('login', new LocalStrategy({
  usernameField : 'email',
  passwordField : 'password'
}, async (email, password, done) => {
  try {
    const client = await ClientModel.findOne({ email: email });
    if ( !client) {
      return done(null, false, { message : 'User not found'});
    }
    const validate = await client.isValidPassword(password);
    if ( !validate ) {
      return done(null, false, { message : 'Wrong Password'});
    }
    return done(null, client, { message : 'Logged in Successfully'});
  } catch (error) {
    return done(error);
  }
}));

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(new JWTstrategy({
  secretOrKey : 'top_secret',
  jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken()
}, async (token, done) => {
  try {
    return done(null, token.client);
  } catch (error) {
    done(error);
  }
}));
