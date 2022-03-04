import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Bubble from "./features/Bubble";

function App() {
  const [questions, setQuestions] = useState([]);
  const [maxQuestion, setMaxQuestion] = useState(20);
  const [inputValue, setInputValue] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://opentdb.com/api.php?amount=${maxQuestion}`)
        .then(res => setQuestions(res.data.results));
    };

    fetchData().catch(console.error);
  }, [maxQuestion]);

  return (
    <div className='container'>
      <Bubble />
      <h1>Quizz App</h1>
      <form action='' className='questionNumber'>
        <input
          type='number'
          id='number'
          defaultValue='20'
          aria-label='Entre le nombre de question désiré'
          onChange={e => setInputValue(e.target.value)}
        />
        <button
          className='maxQuestion-btn'
          onClick={e => {
            e.preventDefault();
            setMaxQuestion(inputValue);
          }}
        >
          Appliquer
        </button>
      </form>
      {questions.length > 0 && (
        <Card questions={questions} maxQuestion={maxQuestion} />
      )}
    </div>
  );
}

export default App;
