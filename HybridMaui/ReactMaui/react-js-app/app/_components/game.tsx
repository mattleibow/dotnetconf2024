import React, { useState } from 'react';
import Board, { Squares } from './board';
import styles from "./game.module.css";

type History = Squares[];

const Game = (): React.JSX.Element => {
    const [history, setHistory] = useState<History>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares: Squares): void => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const jumpTo = (nextMove: number): void => {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className={styles.game}>
            <div className={styles.game_board}>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className={styles.game_info}>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;
