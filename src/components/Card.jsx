import { useEffect, useState } from "react";

const Card = (props) => {
  const [answerd, setAnswerd] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    let badAnswer = props.question.incorrect_answers;
    let goodAnswer = props.question.correct_answer;
    setCorrectAnswer(props.question.correct_answer);
    let allAnswer = [...badAnswer, goodAnswer];
    setAnswerd(allAnswer);
  }, [props.question]);

  const handleClick = e => {
    console.log(e.target.innerHTML);
    if (!isAnswered) {
      setIsAnswered(true);
      props.setAnswerCount(props.answerCount + 1);

      if (e.target.innerHTML === correctAnswer) {
        setIsCorrect(true);
        props.setGoodAnswerCount(props.goodAnswerCount + 1);
      } else {
        setIsCorrect(false);
      }
    }
  };

  return (
    <div className='card-container'>
      <div className='hero-banner'>
        <div className='good-answer'>⭕️ { props.goodAnswerCount + ' / ' + props.answerCount }</div>
        <div className='title'>Average Level</div>
        <div className='total-question'> { props.answerCount + ' / ' + props.maxQuestion } ❓</div>
      </div>
      <div className='titre-container'>
        <h2>{props.question.question}</h2>

        <div className={isAnswered ? "question isAnswered" : "question"}>
          {answerd.map((answer, index) => (
            <div
              key={index}
              className={
                isCorrect ? "answer goodAnswered" : "answer badAnswered"
              }
              onClick={handleClick}
            >
              {answer}
            </div>
          ))}
        </div>
      </div>
      <div className='bottom'>
        <hr />
        <div className='prev-next'>
          <button className='prev'>➜</button>
          <button className='next'>➜</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
