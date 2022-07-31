import { GameStateContext } from "../helpers/Context";
import { useContext } from 'react'
import React from "react";

function Menu() {
    const { gameState, setGameState, userName, setUserName } = useContext(GameStateContext);
    return <div> thisis from menu.js
        <br />
        <label>Enter you Name:</label><input type="text" onChange={(event) => { setUserName(event.target.value) }} />
        <button onClick={() => { setGameState("playing") }}>Start Quiz </button>
    </div>
}

export default Menu;