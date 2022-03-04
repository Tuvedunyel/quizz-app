import { useState, useEffect } from "react";

const Answer = ({
  answers,
  correctAnswer,
  handleCorrectAnswers,
  handleAnswer,
  handleNextQuestion,
}) => {
  const [shuffleAnswer, setShuffleAnswer] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    let randomArray = [];
    randomArray = answers.sort(() => Math.random() - 0.5);
    setShuffleAnswer(randomArray);
    setIsAnswered(false);
  }, [answers]);

  const handleClick = e => {
    if (!isAnswered) {
      setIsAnswered(true);
      handleAnswer();
      if (e.target.innerHTML == correctAnswer) {
        handleCorrectAnswers();
      }
    }
  };

  return (
    <div className='answer-container'>
      <ul>
        {shuffleAnswer.map((answer, index) => {
          return (
            <li key={index} onClick={handleClick}>
              {answer}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Answer;
