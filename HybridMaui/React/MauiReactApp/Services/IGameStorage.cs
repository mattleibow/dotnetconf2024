namespace MauiReactApp.Services;

public interface IGameStorage
{
    void StoreGameState(string[][]? gameState);

    string[][]? LoadGameState();
}
