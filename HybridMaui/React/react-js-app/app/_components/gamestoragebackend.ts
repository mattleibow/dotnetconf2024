import { BoardHistory } from './types';

export interface GameStorageBackend {
    getName(): string;
    getGameState(): BoardHistory | null;
    setGameState(history: BoardHistory): void;
}

export default GameStorageBackend;
