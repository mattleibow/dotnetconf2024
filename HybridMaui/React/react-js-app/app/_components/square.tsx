import React from 'react';
import styles from "./square.module.css";
import { SquareValue } from './types';

export interface SquareProps {
    value: SquareValue;
    onSquareClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Square = ({ value, onSquareClick }: SquareProps): React.JSX.Element => {
    return (
        <button className={styles.square} onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default Square;
