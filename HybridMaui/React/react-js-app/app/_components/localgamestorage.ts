import { BoardHistory } from './types';
import GameStorageBackend from './gamestoragebackend';

class LocalGameStorage implements GameStorageBackend {
    public getName(): string {
        return 'LocalGameStorage';
    }
    
    public getGameState(): Promise<BoardHistory | null> {
        const storedHistory = window.localStorage.getItem('gameState');
        if (storedHistory) {
            return Promise.resolve(JSON.parse(storedHistory));
        }
        return Promise.resolve(null);
    }

    public setGameState(history: BoardHistory | null): Promise<void> {
        const storedHistory = JSON.stringify(history);
        window.localStorage.setItem('gameState', storedHistory);
        return Promise.resolve();
    }
}

export default LocalGameStorage;
