const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  paymentUrl: {
    type: String
  },
  isPaid: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Order', OrderSchema);
