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
// StudentSchema.method('toClient', function() {
//     var obj = this.toObject();
//
//     //Rename fields
//     obj.id = obj._id;
//     delete obj._id;
//
//     return obj;
// });

// // Duplicate the ID field.
// StudentSchema.virtual('id').get(function(){
//     return this._id.toHexString();
// });
//
// // Ensure virtual fields are serialised.
// StudentSchema.set('toJSON', {
//     virtuals: true
// });

// Export the Mongoose model
module.exports = mongoose.model('Student', StudentSchema);
