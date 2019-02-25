
var db = require('./db');

module.exports.handleSignup = (email, password) => {
  // Check if the email exists
  // Save the user to the database
  db.saveUser({email, password});
  // Send the welcome email


};