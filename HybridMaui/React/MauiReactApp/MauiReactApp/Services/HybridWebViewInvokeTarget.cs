namespace MauiReactApp.Services;

public class HybridWebViewInvokeTarget(IGameStorage gameStorage)
{
    public void StoreGameState(string[][] gameState) =>
        gameStorage.StoreGameState(gameState);

    public string[][]? LoadGameState() =>
        gameStorage.LoadGameState();
}
