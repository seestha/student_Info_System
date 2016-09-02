// Load required packages
var Student = require('../models/student');

// Create endpoint /api/students for POSTS
exports.postStudents = function(req, res) {
  // Create a new instance of the Student model
  var student = new Student();

  // Set the student properties that came from the POST data
  student.first_name = req.body.first_name;
  student.middle_name = req.body.middle_name;
  student.last_name = req.body.last_name;
  student.address = req.body.address;
  student.email = req.body.email;
  student.contact_num = req.body.contact_num;

  // Save the student and check for errors
  student.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'New Student added to the list!', data: student });
  });
};

// Create endpoint /api/students for GET
exports.getStudents = function(req, res) {
  // Use the Student model to find all student
  Student.find(function(err, students) {
    if (err)
      res.send(err);

    res.json({students:students});
  });
};

// Create endpoint /api/students/:student_id for GET
exports.getStudent = function(req, res) {
  // Use the Student model to find a specific student
  Student.findById(req.params.student_id, function(err, student) {
    if (err)
      res.send(err);

    res.json({student:student});
  });
};

// Create endpoint /api/students/:student_id for PUT
exports.putStudent = function(req, res) {
  // Use the Student model to find a specific student
  Student.findById(req.params.student_id, function(err, student) {
    if (err)
      res.send(err);

    // Update the existing student record
    student.first_name = req.body.first_name;
    student.middle_name = req.body.middle_name;
    student.last_name = req.body.last_name;
    student.address = req.body.address;
    student.email = req.body.email;
    student.contact_num = req.body.contact_num;

    // Save the student and check for errors
    student.save(function(err) {
      if (err)
        res.send(err);

      res.json({student:student});
    });
  });
};

// Create endpoint /api/students/:student_id for DELETE
exports.deleteStudent = function(req, res) {
  // Use the Student model to find a specific student and remove it
  Student.findByIdAndRemove(req.params.student_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Student removed from the list!' });
  });
};
