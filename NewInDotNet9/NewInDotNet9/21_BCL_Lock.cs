//// TODO: Look at the IL

//public partial class TheBenchmark
//{
//    public static partial bool HasBenchmarks => true;
//    public static partial bool HasOutput => false;

//    private static object lockerObject = new();
//    private static Lock lockerLock = new();

//    public partial int[] OldBaseline()
//    {
//        int counter = 0;
//        while (counter < 200_000)
//        {
//            lock (lockerObject)
//            {
//                counter++;
//            }
//        }
//        return results;
//    }

//    public partial int[] NewNet9()
//    {
//        int counter = 0;
//        while (counter < 200_000)
//        {
//            lock (lockerLock)
//            {
//                counter++;
//            }
//        }
//        return results;
//    }

//    public partial int[] Alternative()
//    {
//        object lockerBad = lockerLock;

//        int counter = 0;
//        while (counter < 200_000)
//        {
//            lock (lockerBad)
//            {
//                counter++;
//            }
//        }
//        return results;
//    }
//}
