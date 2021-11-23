import React, {Component} from React

class QuizQuestion extends Component {
  render() {
    <main>
        <section>
          <p> instruction_text{this.props}</p>
        </section>
        <section className="buttons">
          <ul> 
            <li> 
              this.props.quiz_question.answer_options[0]
            </li>
            //quiz question button logic goes here
          </ul>
        </section>
      </main>
  }
}
  export default QuizQuestion
