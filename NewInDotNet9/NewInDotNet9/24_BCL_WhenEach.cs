
//public partial class TheBenchmark
//{
//    public static partial bool HasBenchmarks => false;
//    public static partial bool HasOutput => true;

//    public partial int[] OldBaseline() =>
//        Task.Run(async () =>
//        {
//            using HttpClient http = new();
//            var dotnet = http.GetAsync("http://dot.net");
//            var bing = http.GetAsync("http://www.bing.com");
//            var ms = http.GetAsync("http://microsoft.com");

//            List<Task<HttpResponseMessage>> tasks = [dotnet, bing, ms];

//            while (tasks.Count > 0)
//            {
//                var completed = await Task.WhenAny(tasks);
//                tasks.Remove(completed);

//                Console.WriteLine(completed.Result.RequestMessage!.RequestUri);
//            }

//            return results;
//        }).Result;

//    public partial int[] NewNet9() =>
//        Task.Run(async () =>
//        {
//            using HttpClient http = new();
//            var dotnet = http.GetAsync("http://dot.net");
//            var bing = http.GetAsync("http://www.bing.com");
//            var ms = http.GetAsync("http://microsoft.com");

//            await foreach (var completed in Task.WhenEach(bing, dotnet, ms))
//            {
//                Console.WriteLine(completed.Result.RequestMessage!.RequestUri);
//            }
        
//            return results;
//        }).Result;

//    public partial int[] Alternative() => [];
//}
