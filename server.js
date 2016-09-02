// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var studentController = require('./controllers/student');

// Connect to the student info system MongoDB
mongoose.connect('mongodb://localhost:27017/student_info_system');

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Add headers

 //CORS middleware for expres...
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, sid");
 res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
 next();
});

// Use environment defined port or 3000
var port = process.env.PORT || 4000;

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /beers
router.route('/students')
  .post(studentController.postStudents)
  .get(studentController.getStudents);

// Create endpoint handlers for /beers/:beer_id
router.route('/students/:student_id')
  .get(studentController.getStudent)
  .put(studentController.putStudent)
  .delete(studentController.deleteStudent);

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
