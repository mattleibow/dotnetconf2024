using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;

TheBenchmark.Print();

if (TheBenchmark.HasBenchmarks)
    BenchmarkRunner.Run<TheBenchmark>();



public record TheRecord(string Id, int Value, string Tags);


[SimpleJob(5, 5, 5, 5)]
[MemoryDiagnoser]
public partial class TheBenchmark
{
    private List<TheRecord> data = null!;
    private Dictionary<string, TheRecord[]> dictionary = null!;
    private int[] results = null!;
    private string allIds = null!;
    private const int MaxIds = 3;

    [GlobalSetup]
    public void GlobalSetup()
    {
        data = [
            // ID: 1 => (3x) 1+2+3   = 6
            new("1", 1, "One,Odd"),
            new("1", 2, "One,Even"),
            new("1", 3, "One,Odd"),

            // ID: 2 => (2x) 4+5     = 9
            new("2", 4, "Two,Even"),
            new("2", 5, "Two,Odd"),

            // ID: 3 => (4x) 6+7+8+9 = 30
            new("3", 6, "Three,Even"),
            new("3", 7, "Three,Odd"),
            new("3", 8, "Three,Even"),
            new("3", 9, "Three,Odd"),
        ];
        dictionary = data
            .GroupBy(x => x.Id)
            .ToDictionary(x => x.Key, x => x.ToArray());
        results = new int[dictionary.Keys.Count];
        allIds = string.Join(",", dictionary.Keys);

        Setup();
    }

    public static partial bool HasBenchmarks { get; }
    public static partial bool HasOutput { get; }

    partial void Setup();

    [Benchmark(Baseline = true, Description = ".NET 8")]
    public partial int[] OldBaseline();

    [Benchmark(Description = ".NET 9")]
    public partial int[] NewNet9();

    [Benchmark(Description = ".NET Alt")]
    public partial int[] Alternative();

    public static void Print()
    {
        if (!HasOutput)
            return;

        var benchie = new TheBenchmark();
        benchie.GlobalSetup();

        Console.WriteLine(".NET 8 (Baseline):");
        foreach (var (index, value) in benchie.OldBaseline().Index())
        {
            Console.WriteLine($"  {index} => {value}");
        }
        Console.WriteLine();

        Console.WriteLine(".NET 9 (New):");
        foreach (var (index, value) in benchie.NewNet9().Index())
        {
            Console.WriteLine($"  {index} => {value}");
        }
        Console.WriteLine();

        Console.WriteLine(".NET Alt:");
        foreach (var (index, value) in benchie.Alternative().Index())
        {
            Console.WriteLine($"  {index} => {value}");
        }
        Console.WriteLine();
    }
}
