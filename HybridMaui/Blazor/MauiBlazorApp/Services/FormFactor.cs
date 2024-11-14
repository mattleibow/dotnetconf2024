using MauiBlazorApp.Shared.Services;

namespace MauiBlazorApp.Services;

public class FormFactor : IFormFactor
{
    public string GetFormFactor() =>
        $"{DeviceInfo.Idiom}";

    public string GetPlatform() =>
        $"{DeviceInfo.Platform} ({DeviceInfo.VersionString})";
}
