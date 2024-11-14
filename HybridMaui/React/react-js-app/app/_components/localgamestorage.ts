import { BoardHistory } from './types';
import GameStorageBackend from './gamestoragebackend';

class LocalGameStorage implements GameStorageBackend {
    public getName(): string {
        return 'LocalGameStorage';
    }
    
    public getGameState(): BoardHistory | null {
        const storedHistory = localStorage.getItem('gameState');
        if (storedHistory) {
            return JSON.parse(storedHistory);
        }
        return null;
    }

    public setGameState(history: BoardHistory): void {
        const storedHistory = JSON.stringify(history);
        localStorage.setItem('gameState', storedHistory);
    }
}

export default LocalGameStorage;
