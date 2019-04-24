const mongoose = require('mongoose');
export const companySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  address: String,
  description: String,
  logo: String,
  name: String,
  password: String,
  prices: [Map],
  services: [String],
}, {versionKey: false});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
