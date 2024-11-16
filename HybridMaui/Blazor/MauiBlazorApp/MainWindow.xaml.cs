namespace MauiBlazorApp;

public partial class MainWindow : Window
{
    public MainWindow(MainPage mainPage)
    {
        InitializeComponent();

        Page = mainPage;
    }
}
