"use client";

import TicTacToe from "../_components/tictactoe";
import GameStorage from "../_components/gamestorage";

const Game = () => {
  return (
    <>
      <h1>Tic Tac Toe</h1>

      <p>
        <em>Current game storage backend: <b>{GameStorage.current.getName()}</b></em>
      </p>

      <TicTacToe />

    </>
  );
}

export default Game;
