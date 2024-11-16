namespace MauiReactApp;

public partial class App : Application
{
    public App()
    {
        InitializeComponent();
    }

    protected override Window CreateWindow(IActivationState? activationState)
    {
        ArgumentNullException.ThrowIfNull(activationState);

        var services = activationState.Context.Services;
        var window = services.GetRequiredService<MainWindow>();

        return window;
    }
}