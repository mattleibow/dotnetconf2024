// TODO: Look at the IL

public partial class TheBenchmark
{
    public static partial bool HasBenchmarks => true;
    public static partial bool HasOutput => false;

    private int Id1 = 1;
    private int Id2 = 2;
    private int Id3 = 3;

    public partial int[] OldBaseline()
    {
        return DoIt(Id1, Id2, Id3);

        int[] DoIt(params int[] ints)
        {
            return results;
        }
    }

    public partial int[] NewNet9()
    {
        return DoIt(Id1, Id2, Id3);

        int[] DoIt(params ReadOnlySpan<int> ints)
        {
            return results;
        }
    }

    public partial int[] Alternative()
    {
        return DoIt(Id1, Id2, Id3);

        int[] DoIt(params IEnumerable<int> ints)
        {
            return results;
        }
    }
}
