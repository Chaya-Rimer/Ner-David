using NerDavidWebApp.Services;

namespace NerDavidWebApp
{
    public static class  StartupExtensions
    {
        public static void AddCustomServices(this IServiceCollection services)
        {
            services.AddScoped<BachurimTableService>();
            services.AddScoped<BachurimService>();
            services.AddScoped<LimudService>();
            services.AddScoped<DisplayDataService>();
            // הוסף שירותים נוספים כאן לפי הצורך
        }
    }
}
