using MauiBlazorApp.Shared.Services;

namespace MauiBlazorApp.Web.Client.Services;

public class FormFactor : IFormFactor
{
    public string GetFormFactor() => "Web Assembly";

    public string GetPlatform() => $"{Environment.OSVersion}";
}
