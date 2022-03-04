import { useState, useEffect } from "react";

const Answer = ({ answers, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffleAnswer, setShuffleAnswer] = useState([]);

  useEffect(() => {
    let randomArray = [];
    randomArray = answers.sort(() => Math.random() - 0.5);
    setShuffleAnswer(randomArray);
  });
  return (
    <div className='answer-container'>
      <ul>
        {shuffleAnswer.map((answer, index) => {
          return <li key={index}>{answer}</li>;
        })}
      </ul>
    </div>
  );
};

export default Answer;
