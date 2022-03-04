import { useEffect, useState } from "react";
import Answer from "./Answer";
import Question from "./Question";

const Card = props => {
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers([
      ...props.questions[currentQuestion].incorrect_answers,
      props.questions[currentQuestion].correct_answer,
    ]);
  }, [currentQuestion]);

  const handlePrevQuestion = () => {
    if (currentQuestion > 0 && answeredQuestions === props.maxQuestion) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextQuestion = () => {
    if (
      currentQuestion < props.maxQuestion - 1 &&
      answeredQuestions === props.maxQuestion
    ) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleAnswer = () => {
    if (answeredQuestions < props.maxQuestion) {
      setAnsweredQuestions(answeredQuestions + 1);
      if (currentQuestion < props.maxQuestion - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  };

  const handleCorrectAnswers = () => {
    setCorrectAnswers(correctAnswers + 1);
  };

  return (
    <div className='card-container'>
      <header>
        <div className='success'>
          ✔️ {correctAnswers + " / " + answeredQuestions}
        </div>
        <h2>Average Level</h2>
        <div className='quantity'>
          ❓ {answeredQuestions + " / " + props.maxQuestion}
        </div>
      </header>
      <main>
        <Question question={props.questions[currentQuestion].question} />
        <Answer
          answers={answers}
          correctAnswer={props.questions[currentQuestion].correct_answer}
          handleAnswer={handleAnswer}
          handleCorrectAnswers={handleCorrectAnswers}
        />
      </main>
      <footer>
        <button className='btn-prev' onClick={() => handlePrevQuestion()}>
          ➜
        </button>
        <h4>{currentQuestion + 1}</h4>
        <button className='btn-next' onClick={() => handleNextQuestion()}>
          ➜
        </button>
      </footer>
    </div>
  );
};

export default Card;
