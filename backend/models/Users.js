const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  username: String,
  password: String,
})

const employeeModel = mongoose.model('employee', usersSchema)

module.exports = employeeModel
