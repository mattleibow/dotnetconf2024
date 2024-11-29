
//public partial class TheBenchmark
//{
//    public static partial bool HasBenchmarks => true;
//    public static partial bool HasOutput => true;

//    public partial int[] OldBaseline()
//    {
//        var counts = data
//            .GroupBy(x => x.Id)
//            .Select(x => x.Count());

//        var i = 0;
//        foreach (var count in counts)
//        {
//            results[i] = count;
//            i++;
//        }

//        return results;
//    }

//    public partial int[] NewNet9()
//    {
//        var counts = data
//            .CountBy(x => x.Id);

//        var i = 0;
//        foreach (var count in counts)
//        {
//            results[i] = count.Value;
//            i++;
//        }

//        return results;
//    }

//    public partial int[] Alternative()
//    {
//        var counts = new Dictionary<string, int>();
//        foreach (var item in data)
//        {
//            if (counts.TryGetValue(item.Id, out var aggr))
//                counts[item.Id] = aggr + 1;
//            else
//                counts[item.Id] = 1;
//        }

//        var i = 0;
//        foreach (var count in counts)
//        {
//            results[i] = count.Value;
//            i++;
//        }

//        return results;
//    }
//}
