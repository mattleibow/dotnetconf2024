import GameStorageBackend from './gamestoragebackend';
import LocalGameStorage from './localgamestorage';

declare global {
    interface Window {
        GameStorage: typeof GameStorage;
        GameStorageBackendOverride: GameStorageBackend | null;
    }
}

type GameStorageResetListener = () => void;

class GameStorage {
    static listeners: GameStorageResetListener[] = [];
    static currentBackend: GameStorageBackend | null | undefined;

    public static getCurrent(): GameStorageBackend {
        if (GameStorage.currentBackend)
            return GameStorage.currentBackend;

        if (typeof window !== 'undefined' && window.GameStorageBackendOverride) {
            GameStorage.currentBackend = window.GameStorageBackendOverride;
        } else {
            GameStorage.currentBackend = new LocalGameStorage();
        }

        return GameStorage.currentBackend;
    }

    public static reset(): boolean {
        GameStorage.getCurrent().setGameState(null);
        GameStorage.listeners.forEach(handler => {
            setTimeout(handler, 0);
        });
        return true;
    }

    public static addResetListener(handler: GameStorageResetListener) : void {
        GameStorage.listeners.push(handler);
    }

    public static removeResetListener(handler: GameStorageResetListener): void {
        const index = GameStorage.listeners.indexOf(handler);
        if (index > -1) {
            GameStorage.listeners.splice(index, 1);
        }
    }
}

if (typeof window !== 'undefined') {
    window.GameStorage = GameStorage;
}

export default GameStorage;
