using Blazored.LocalStorage;
using MauiBlazorApp.Shared.Services;

namespace MauiBlazorApp.Web.Services;

public class GameStorage(ILocalStorageService browserStorage) : IGameStorage
{
    public async Task<string[][]?> LoadGameState() =>
        await browserStorage.GetItemAsync<string[][]>("gameState");

    public async Task StoreGameState(string[][]? gameState)
    {
        if (gameState is null)
        {
            await browserStorage.RemoveItemAsync("gameState");
        }
        else
        {
            await browserStorage.SetItemAsync("gameState", gameState);
        }
    }
}