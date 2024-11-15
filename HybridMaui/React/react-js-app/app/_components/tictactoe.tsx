import React, { useState, useEffect } from 'react';
import Board from './board';
import styles from "./tictactoe.module.css";
import GameStorage from './gamestorage';
import { Squares, BoardHistory } from './types';

const TicTacToe = (): React.JSX.Element => {
    const storage = GameStorage.getCurrent();

    const [history, setHistory] = useState<BoardHistory | null>(null);
    const [currentMove, setCurrentMove] = useState<number>(0);

    GameStorage.addResetListener(() => {
        loadGameState();
    })

    // load the last game state from storage
    useEffect(() => {
        loadGameState();
    }, []);

    // save game state to storage
    useEffect(() => {
        if (history === null)
            return;

        storage.setGameState(history);
    }, [storage, history]);

    const loadGameState = () => {
        storage.getGameState()
            .then((gameState) => {
                if (gameState === null) {
                    // there are no saved games, start a new one
                    setHistory([Array(9).fill(null)]);
                    setCurrentMove(0);
                } else {
                    setHistory(gameState);
                    setCurrentMove(gameState.length - 1);
                }
                console.log("Loaded a saved game from storage.");
            })
            .catch((err) => {
                // there was an error loading the game state, start a new game
                setHistory([Array(9).fill(null)]);
                console.error('There was an error loading a saved game:', err);
            });
    }

    const isXNext = () => {
        return currentMove % 2 === 0;
    }

    const getCurrentSquares = (): Squares => {
        if (history === null)
            throw new Error('No game history available');

        return history[currentMove];
    }

    const handlePlay = (nextSquares: Squares): void => {
        if (history === null)
            return;

        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const jumpTo = (nextMove: number): void => {
        if (history === null)
            return;

        setCurrentMove(nextMove);
    }

    const resetGame = (): void => {
        GameStorage.reset();
    }

    const moves = !history ? [] :
        history.map((squares, move) => {
            const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{description}</button>
                </li>
            );
        });

    return (
        <div className={styles.game}>

            {history === null ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className={styles['game-board']}>
                        <Board xIsNext={isXNext()} squares={getCurrentSquares()} onPlay={handlePlay} />
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
                </>
            )}

        </div>
    );
}

export default TicTacToe;
