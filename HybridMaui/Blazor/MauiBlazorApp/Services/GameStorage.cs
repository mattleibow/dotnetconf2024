using MauiBlazorApp.Shared.Services;
using System.Text.Json;

namespace MauiBlazorApp.Services;

public class GameStorage(ISecureStorage secureStorage) : IGameStorage
{
    public async Task<string[][]?> LoadGameState()
    {
        var stored = await secureStorage.GetAsync("gameState");
        if (!string.IsNullOrWhiteSpace(stored))
        {
            return JsonSerializer.Deserialize<string[][]?>(stored);
        }

        return null;
    }

    public async Task StoreGameState(string[][]? gameState)
    {
        if (gameState is null)
        {
            secureStorage.Remove("gameState");
        }
        else
        {
            var stored = JsonSerializer.Serialize(gameState);
            await secureStorage.SetAsync("gameState", stored);
        }
    }
}
