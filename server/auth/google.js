const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const ClientModel = require('../models/client');

passport.serializeUser((client, done) => {
  done(null, client.id);
});

passport.deserializeUser((id, done) => {
  ClientModel.findById(id).then((client) => {
    done(null, client);
  });
});

passport.use(
  new GoogleStrategy({
      clientID: '769630920781-4egvda808iu2ee7dlejolmuvrrahrb2h.apps.googleusercontent.com',
      clientSecret: 'jm9_PiplaTSLUZYJACvgbDt_',
      callbackURL: "/auth/google/redirect"
    }, (accessToken, refreshToken, profile, done) => {
    ClientModel.findOne({googleId: profile.id}).then((currentClient) => {
      if (currentClient) {
        console.log('this user is already exist');
        done(null, currentClient);
      } else {
        new ClientModel({
          googleId: profile.id,
          name: profile.name.givenName,
          email: profile.emails[0].value,
          photo: profile.photos[0].value
        }).save().then((newClient) => {
          done(null, newClient);
        });
      }
    });
    }
  ));
