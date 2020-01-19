const mongoose = require('mongoose');

const gymSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  hours: {
    sun: { type: String, default: "" },
    mon: { type: String, default: "" },
    tue: { type: String, default: "" },
    wed: { type: String, default: "" },
    thu: { type: String, default: "" },
    fri: { type: String, default: "" },
    sat: { type: String, default: "" }
  },
  webSite: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Gym', gymSchema);