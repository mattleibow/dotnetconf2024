using MauiBlazorApp.Shared.Services;

namespace MauiBlazorApp.Web.Services;

public class FormFactor : IFormFactor
{
    public string GetFormFactor() => "Web";

    public string GetPlatform() => $"{Environment.OSVersion}";
}
