
using System.Diagnostics.CodeAnalysis;

Console.WriteLine("Hello, World!");

if (OptionalFeature.IsSupported)
    OptionalFeature.Implementation();
else
    Console.WriteLine("We never ran bad code!");

public class OptionalFeature
{
    const string SwitchName = "OptionalFeature";

    //[FeatureSwitchDefinition(SwitchName)]
    public static bool IsSupported =>
        AppContext.TryGetSwitch(SwitchName, out bool isEnabled) ? isEnabled : true;

    public static void Implementation()
    {
        Console.WriteLine("The bad implementation that can never work!");
    }
}
