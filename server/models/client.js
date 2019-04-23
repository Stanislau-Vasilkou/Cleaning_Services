const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  role: {
    type: String,
    default: "client"
  }
}, {versionKey: false});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
