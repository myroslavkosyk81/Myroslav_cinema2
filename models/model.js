var mongoose = require("mongoose");

var seatSchema = new mongoose.Schema({
  place: {
    type: Number,
    // index: true,
    required: true,
    // unique: true
  },
  row: {
    type: Number,
    // index: true,
    required: true,
    // unique: true
  },
  busy: {
    type: Boolean,
    // index: true,
  },

}, {timestamps: true});

var Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat
