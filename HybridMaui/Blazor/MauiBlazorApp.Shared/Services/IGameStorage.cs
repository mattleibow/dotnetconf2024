namespace MauiBlazorApp.Shared.Services;

public interface IGameStorage
{
    Task StoreGameState(string[][]? gameState);
    
    Task<string[][]?> LoadGameState();
}
