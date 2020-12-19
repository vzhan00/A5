const mongoose = require('mongoose')
const questionSchema = require('./question-schema.js')
const questionModel = mongoose.model('QuestionModel', questionSchema)
module.exports = questionModel