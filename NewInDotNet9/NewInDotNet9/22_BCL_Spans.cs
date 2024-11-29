
//public partial class TheBenchmark
//{
//    public static partial bool HasBenchmarks => true;
//    public static partial bool HasOutput => true;

//    public partial int[] OldBaseline()
//    {
//        var splitIds = allIds.Split(',');

//        var i = 0;
//        foreach (var id in splitIds)
//        {
//            results[i] = dictionary[id].Length;
//            i++;
//        }

//        return results;
//    }

//    public partial int[] NewNet9()
//    {
//        var idsAsSpan = allIds.AsSpan();
//        var splitIds = idsAsSpan.Split(',');

//        var i = 0;
//        foreach (var range in splitIds)
//        {
//            var id = idsAsSpan[range];
//            results[i] = dictionary[id.ToString()].Length;
//            i++;
//        }

//        return results;
//    }

//    public partial int[] Alternative()
//    {
//        Span<Range> dest = stackalloc Range[MaxIds]; // <- pre-known number!

//        var idsAsSpan = allIds.AsSpan();
//        var splitIds = idsAsSpan.Split(dest, ',');

//        var i = 0;
//        foreach (var range in dest)
//        {
//            var id = idsAsSpan[range];
//            results[i] = dictionary[id.ToString()].Length;
//            i++;
//        }

//        return results;
//    }
//}
