const mongoose = require('mongoose');
Add commentMore actions
const lecturerSchema = new mongoose.Schema({
  name: String,
  department: String
});

module.exports = mongoose.model('Lecturer', lecturerSchema);