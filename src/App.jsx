import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz'
import Result from './components/Result';
import React, { useState } from 'react';
import { GameStateContext } from './helpers/Context';

function App() {
  //basically we have 3 states in our app. 1.menu 2. playing 3. finished.

  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{ gameState, setGameState, userName, setUserName, score, setScore }}>
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <Result />}

      </GameStateContext.Provider>
    </div>
  );
}

export default App;
