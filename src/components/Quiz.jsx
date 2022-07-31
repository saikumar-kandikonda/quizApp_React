import React, { useContext, useState } from "react";
import Questions from "../helpers/Questions";
import '../App.css';
import { GameStateContext } from "../helpers/Context";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const { score, setScore, gameState, setGameState } = useContext(GameStateContext);

    function choseOption(value) {
        setOptionChosen(value)

    }

    function nextQuestionFn() {
        if (Questions[currentQuestion]["answer"] === optionChosen) {
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1);

    }

    function finishQuiz() {
        if (Questions[currentQuestion]["answer"] === optionChosen) {
            setScore(score + 1)
        }
        setGameState("finished");
    }
    return <div id="questionsCard">
        <h1 className="question">{Questions[currentQuestion]["questionText"]}</h1>

        <ul className="answers">

            {Questions[currentQuestion]["options"].map((item, key) => {
                return <button key={key} className="answerBtn" onClick={() => { choseOption(item) }}>
                    <li key={key + 1}>{item}</li>
                </button>
            })}
        </ul>
        <div className="questionsCardFooter">
            {/* <p className="answerStatus">{optionChosen}</p> */}
            {(currentQuestion === Questions.length - 1) ?
                <button className="nextQuestion" onClick={() => { finishQuiz() }}>Finish Quiz</button> :
                <button className="nextQuestion" onClick={() => { nextQuestionFn() }}>Next question</button>}
        </div>
        {score}
    </div >

}

export default Quiz;