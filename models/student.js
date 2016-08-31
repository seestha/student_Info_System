// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var StudentSchema   = new mongoose.Schema({
  first_name: String,
  middle_name: String,
  last_name: String,
  address: String,
  email: String,
  contact_num: Number
});

// Export the Mongoose model
module.exports = mongoose.model('Student', StudentSchema);
