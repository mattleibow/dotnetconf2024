import React, { useState, useEffect } from 'react';
import Board from './board';
import styles from "./tictactoe.module.css";
import GameStorage from './gamestorage';
import { Squares, BoardHistory } from './types';

const TicTacToe = (): React.JSX.Element => {
    const initialHistory = GameStorage.current.getGameState() || [Array(9).fill(null)] as BoardHistory;
    const initialMove = initialHistory.length - 1;

    const [history, setHistory] = useState<BoardHistory>(initialHistory);
    const [currentMove, setCurrentMove] = useState<number>(initialMove);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    useEffect(() => {
        GameStorage.current.setGameState(history);
    }, [history]);

    const handlePlay = (nextSquares: Squares): void => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const jumpTo = (nextMove: number): void => {
        setCurrentMove(nextMove);
    }

    const resetGame = (): void => {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
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

            <div className={styles['game-board']}>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                <div className={styles['game-controls']}>
                    <button onClick={resetGame}>Reset Board</button>
                </div>
            </div>

            <div className={styles['game-info']}>
                <div className={styles['moves-title']}>
                    <p>Past Moves:</p>
                </div>

                <ol>{moves}</ol>
            </div>

        </div>
    );
}

export default TicTacToe;
