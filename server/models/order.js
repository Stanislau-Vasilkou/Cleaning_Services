const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  address: {
    required: true,
    type: String
  },
  cleaningType: {
    type: String
  },
  roomDescription: {
    type: String
  },
  expectedTimeOfBeginning: {
    type: String
  },
  companyNAme: {
    type: String
  },
  cost: {
    type: String
  },
  expectedCleaningTime: {
    type: String
  },
  status: {
    type: String
  }
});

const OrderModule = mongoose.module('order', OrderSchema);

module.exports = OrderModule;
