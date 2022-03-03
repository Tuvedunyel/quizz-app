import { useEffect, useState } from "react";
import Answer from "./Answer";
import Question from "./Question";

const Card = (props) => {
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);


  return (
    <div className='card-container'>
      <header>
        <div className='success'>✔️ { correctAnswers + ' / ' + answeredQuestions }</div>
        <h2>Average Level</h2>
        <div className='quantity'>❓ { answeredQuestions + ' / ' + props.maxQuestion }</div>
      </header>
      <main>
          <Question />
          <Answer />
      </main>
      <footer>
        <button className='btn-prev'>➜</button>
        <button className='btn-next'>➜</button>
      </footer>
    </div>
  );
};

export default Card;
