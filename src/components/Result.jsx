import React, { useContext } from "react";
import Questions from "../helpers/Questions";
import { GameStateContext } from '../helpers/Context';


function Result() {

    const { score, setScore, userName, setGameState,setUserName } = useContext(GameStateContext);

    function restartQuiz() {
        setScore(0);
        setUserName("")
        setGameState("menu")
    }

    return <div>
        <h1>Quiz Finished</h1>
        <h2> {userName} : {score}/{(Questions.length)}</h2>

        <button onClick={() => restartQuiz()}>Restart Quiz</button>
    </div>
}
export default Result;