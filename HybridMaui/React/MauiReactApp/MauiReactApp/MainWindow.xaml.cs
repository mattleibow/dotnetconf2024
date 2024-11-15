namespace MauiReactApp;

public partial class MainWindow : Window
{
	public MainWindow(MainPage mainPage)
	{
		InitializeComponent();

		Page = mainPage;
	}

    private void OnResetClicked(object sender, EventArgs e)
    {
		if (Page is not MainPage mainPage)
			return;

		mainPage.ResetGame();
    }
}
