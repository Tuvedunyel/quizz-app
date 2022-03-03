import { useEffect, useState } from "react";

const Card = ({ question }) => {
  const [answerd, setAnswerd] = useState([]);

  useEffect(() => {
    setAnswerd(question.incorrect_answers);
    setAnswerd([...answerd, question.correct_answer]);
    setAnswerd([...new Set(answerd)]);
  }, []);

  return (
    <div className='card-container'>
      <div className='hero-banner'>
        <div className='good-answer'>⭕️ 0 / 9</div>
        <div className='title'>Average Level</div>
        <div className='total-question'> 9 / 20 ❓</div>
      </div>
      <div className='titre-container'>
        <h2>{question.question}</h2>

        <div className='question'>
          {answerd.map((answer, index) => (
            <div key={index} className='answer'>
              <p>{answer}</p>
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
