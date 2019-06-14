const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
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
  new FacebookStrategy({
      clientID: '408125416705830',
      clientSecret: '96ab46d06f3bc040a63e46d97def3024',
      callbackURL: "/auth/facebook/redirect",
      profileFields: ['id', 'displayName', 'picture', 'email']
    }, (accessToken, refreshToken, profile, done) => {
      ClientModel.findOne({facebookId: profile.id}).then((currentClient) => {
        if (currentClient) {
          console.log('this user is already exist');
          done(null, currentClient);
        } else {
          new ClientModel({
            facebookId: profile.id,
            name: profile.displayName.split(' ')[0],
            email: profile.emails[0].value,
            photo: profile.photos[0].value
          }).save().then((newClient) => {
            done(null, newClient);
          });
        }
      });
    }
  ));
