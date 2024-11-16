
type SquareValue = string | null;

type Squares = SquareValue[];

type BoardHistory = Squares[];

interface GameStorageBackend {
    getName(): string;
    getGameState(): Promise<BoardHistory | null>;
    setGameState(history: BoardHistory | null): Promise<void>;
}

type GameStorageResetListener = () => void;

declare var GameStorageBackendOverride: GameStorageBackend | null;

declare namespace GameStorage {
    function getCurrent(): GameStorageBackend;
    function reset(): void;
    function addResetListener(handler: GameStorageResetListener): void;
    function removeResetListener(handler: GameStorageResetListener): void;
}
