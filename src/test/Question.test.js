import { render } from "@testing-library/react"
import Question from "../components/Question"


describe('Test du composant Question', () => {
    it('Question is rendered', () => {
        const fakeQuestion = "Is the cake a lie?"
        render(<Question question={fakeQuestion} />)
    })
})