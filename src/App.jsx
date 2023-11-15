<<<<<<< HEAD
import React from "react";
import Board from "./components/Board";

export default function App() {
  return (
    <div>
      <Board />
=======
import './App.css';
import Board from './Components/Board';
import React, {useState} from 'react';
import Message from './Components/Message';

export default function App() {
  const [playerTurn, setPlayerTurn] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe
      </header>
      <Message playerTurn={playerTurn}/>
      <Board playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
      <button>Play again</button>
>>>>>>> 442d0eb76c45d02a793808b8b36d83d0ec5ecdb6
    </div>
  );
}
