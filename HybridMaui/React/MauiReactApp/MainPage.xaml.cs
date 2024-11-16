using MauiReactApp.Services;
using System.Runtime.CompilerServices;
using System.Text.Json.Serialization;
using System.Text.Json.Serialization.Metadata;

namespace MauiReactApp;

public partial class MainPage : ContentPage
{
    public MainPage(HybridWebViewInvokeTarget invokeTarget)
    {
        InitializeComponent();

        hybridWebView.SetInvokeJavaScriptTarget(invokeTarget);
    }

    public async void ResetGame()
    {
        await hybridWebView.InvokeJavaScriptAsync(
            "GameStorage.reset",
            GameStorageContext.Default.Boolean);
    }

    [JsonSourceGenerationOptions(WriteIndented = true)]
    [JsonSerializable(typeof(bool))]
    partial class GameStorageContext : JsonSerializerContext
    {
        // This type's attributes specify JSON serialization info to preserve type structure
        // for trimmed builds.    
    }
}
