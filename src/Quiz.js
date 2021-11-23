import React, { Component} from 'react'
import QuizQuestion from QuizQuestion.js

let quizData = require('./quiz_data.json')

class Quiz extends Component{
  constructor(props) {
    super(props)
    this.state= {quiz_position: 1}
  }
  
  render(quiz_question) {
    quiz_question = quizData.quiz_questions(quiz_position - 1)
    return ( 
      <div><QuizQuestion /></div>
      )
  } 
}
export default Quiz