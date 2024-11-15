import { BoardHistory } from './types';

export interface GameStorageBackend {
    getName(): string;
    getGameState(): Promise<BoardHistory | null>;
    setGameState(history: BoardHistory | null): Promise<void>;
}

export default GameStorageBackend;
