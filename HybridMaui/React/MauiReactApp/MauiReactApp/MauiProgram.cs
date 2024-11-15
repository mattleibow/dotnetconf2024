using MauiReactApp.Services;
using Microsoft.Extensions.Logging;

namespace MauiReactApp
{
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
                    fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
                });

            // maui services
            builder.Services.AddSingleton<ISecureStorage>(SecureStorage.Default);

            // services
            builder.Services.AddSingleton<IGameStorage, GameStorage>();
            builder.Services.AddSingleton<HybridWebViewInvokeTarget>();

            // pages
            builder.Services.AddTransient<MainWindow>();
            builder.Services.AddTransient<MainPage>();

#if DEBUG
            builder.Services.AddHybridWebViewDeveloperTools();
            builder.Logging.AddDebug();
#endif

            return builder.Build();
        }
    }
}
