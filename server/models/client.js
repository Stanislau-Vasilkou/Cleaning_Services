const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    default: "client",
    type: String,
  },
}, {versionKey: false});

ClientSchema.pre('save', async function(next) {
  const client = this;
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

ClientSchema.methods.isValidPassword = async function(password) {
  const client = this;
  const compare = await bcrypt.compare(password, client.password);
  return compare;
};

const ClientModel = mongoose.model('client', ClientSchema);

module.exports = ClientModel;
