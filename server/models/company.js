const mongoose = require('mongoose');
export const companySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  logo: String,
  name: String,
  description: String,
  address: String,
  services: [String],
  prices: [Map],
  password: String,
}, {versionKey: false});

const company = mongoose.model('company', companySchema);

module.exports = company;
