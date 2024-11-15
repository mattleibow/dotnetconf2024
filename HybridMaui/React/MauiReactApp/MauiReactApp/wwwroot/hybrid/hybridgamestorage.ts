
class HybridGameStorage implements GameStorageBackend {
    public getName(): string {
        return 'HybridGameStorage';
    }

    public async getGameState(): Promise<BoardHistory | null> {
        try {
            const gameState = await window.HybridWebView.InvokeDotNet("LoadGameState");
            return gameState as BoardHistory | null;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    public async setGameState(history: BoardHistory): Promise<void> {
        try {
            await window.HybridWebView.InvokeDotNet("StoreGameState", [history]);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}
