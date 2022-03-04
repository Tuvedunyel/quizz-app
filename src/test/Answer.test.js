import { render } from "@testing-library/react";
import Answer from "../components/Answer";

describe('Test unitaire sur Answer', () => {
    it('Answer is rendered', () => {
        const fakeAnswer = ["Fake 1", "Fake 2", "Fake 3"];
        const fakeCorrectAnswer = "Fake 1";
        render(<Answer answers={fakeAnswer} correctAnswer={fakeCorrectAnswer} />);
    })
})