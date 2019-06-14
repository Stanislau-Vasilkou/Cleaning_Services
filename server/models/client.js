const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  password: {
    // required: true,
    type: String,
  },
  phone: {
    type: String,
    unique: true,
  },
  role: {
    default: "client",
    type: String,
  },
  googleId: {
    type: String
  },
  facebookId: {
    type: String
  },
  photo: {
    type: String
  }
}, {versionKey: false});

ClientSchema.pre('save', async function(next) {
  if (this.password) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
  next();
});

ClientSchema.methods.isValidPassword = async function(password) {
  const client = this;
  const compare = await bcrypt.compare(password, client.password);
  return compare;
};

const ClientModel = mongoose.model('client', ClientSchema);

module.exports = ClientModel;
