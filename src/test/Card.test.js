import { render } from "@testing-library/react";
import Card from "../components/Card";

describe("Test du composant Card", () => {
  it("rendered Card", () => {
    const fakeQuestions = [
      {
        category: "Fake",
        correct_answer: "Fake",
        difficulty: "Fake",
        incorrect_answers: ["Fake"],
        question: "Fake",
        type: "Fake",
      },
    ];
    render(<Card questions={fakeQuestions} />);
  });
});
