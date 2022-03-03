import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [questions, setQuestions] = useState([]);
  const [maxQuestion, setMaxQuestion] = useState(20);

  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=${maxQuestion}`)
      .then(res => setQuestions(res.data.results));
  }, [maxQuestion]);

  return (
    <div className='container'>
      <h1>Quizz App</h1>
      <form action='' className='questionNumber'>
        <input
          type='number'
          id='number'
          defaultValue='20'
          aria-label='Entre le nombre de question désiré'
          onChange={e => setMaxQuestion(e.target.value)}
        />
      </form>
      <Card questions={questions} maxQuestion={maxQuestion} />
    </div>
  );
}

export default App;
