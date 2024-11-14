import GameStorageBackend from './gamestoragebackend';
import LocalGameStorage from './localgamestorage';

class GameStorage {
    public static current: GameStorageBackend = new LocalGameStorage();
}

export default GameStorage;
