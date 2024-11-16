using MauiBlazorApp.Services;
using MauiBlazorApp.Shared.Services;
using Microsoft.Extensions.Logging;

namespace MauiBlazorApp;

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts =>
            {
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
            });

        builder.Services.AddMauiBlazorWebView();

        // maui services
        builder.Services.AddSingleton<ISecureStorage>(SecureStorage.Default);

        // services
        builder.Services.AddSingleton<IGameStorage, GameStorage>();
        builder.Services.AddSingleton<IFormFactor, FormFactor>();

        // pages
        builder.Services.AddTransient<MainWindow>();
        builder.Services.AddTransient<MainPage>();

#if DEBUG
        builder.Services.AddBlazorWebViewDeveloperTools();
        builder.Logging.AddDebug();
#endif

        return builder.Build();
    }
}
