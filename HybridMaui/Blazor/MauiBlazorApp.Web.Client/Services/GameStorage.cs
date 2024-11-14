using Blazored.LocalStorage;
using MauiBlazorApp.Shared.Services;

namespace MauiBlazorApp.Web.Client.Services;

public class GameStorage(ILocalStorageService browserStorage) : IGameStorage
{
    public async Task<string[][]?> LoadGameState() =>
        await browserStorage.GetItemAsync<string[][]>("gameState");

    public async Task StoreGameState(string[][] gameState) => 
        await browserStorage.SetItemAsync("gameState", gameState);
}