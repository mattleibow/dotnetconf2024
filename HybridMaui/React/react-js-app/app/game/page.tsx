"use client";

import GameStorage from "../_components/gamestorage";
import dynamic from 'next/dynamic'

const TicTacToe = dynamic(
  () => import('../_components/tictactoe'),
  { ssr: false }
)

const Game = () => {
  return (
    <>
      <h1>Tic Tac Toe</h1>

      <p>
        <em>Current game storage backend: <b>{GameStorage.getCurrent().getName()}</b></em>
      </p>

      <TicTacToe />

    </>
  );
}

export default Game;
