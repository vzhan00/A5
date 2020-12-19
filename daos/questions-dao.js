const questionModel = require('../models/questions/questions-model.js')
const findAllQuizzes = () => questionModel.find()
const findQuestionById = (questionId) => questionModel.findById(questionId)
const findQuestionByQuizId = (quizId) => questionModel.find(quizId)
module.exports = { findAllQuizzes, findQuestionById, findQuestionByQuizId }