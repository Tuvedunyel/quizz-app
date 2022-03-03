import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=20")
      .then(res => setQuestions(res.data.results));
  }, []);

  return (
    <>
      <h1>Quizz App</h1>
      { questions.map( question => (
        <Card key={index} question={question} />
      ) ) }
    </>
  );
}

export default App;
