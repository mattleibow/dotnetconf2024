using System.Text.Json;

namespace MauiReactApp.Services;

public class GameStorage(ISecureStorage secureStorage) : IGameStorage
{
    private string[][]? gameStateCache = null;

    public string[][]? LoadGameState()
    {
        if (gameStateCache is null)
        {
            var stored = secureStorage.GetAsync("gameState").GetAwaiter().GetResult();
            if (!string.IsNullOrWhiteSpace(stored))
            {
                gameStateCache = JsonSerializer.Deserialize<string[][]?>(stored);
            }
        }

        return gameStateCache;
    }

    public void StoreGameState(string[][]? gameState)
    {
        gameStateCache = gameState;

        if (gameState is null)
        {
            secureStorage.Remove("gameState");
            return;
        }

        var stored = JsonSerializer.Serialize(gameState);
        _ = secureStorage.SetAsync("gameState", stored);
    }
}
