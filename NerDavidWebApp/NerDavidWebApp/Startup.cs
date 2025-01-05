//using Microsoft.AspNetCore.Authentication.JwtBearer;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.IdentityModel.Tokens;
//using NerDavidWebApp.Models;
//using System.Text;

//public class Startup
//{
//    public IConfiguration Configuration { get; }

//    public Startup(IConfiguration configuration)
//    {
//        Configuration = configuration;
//    }

//    public void ConfigureServices(IServiceCollection services)
//    {
//        // הוספת חיבור למסד הנתונים
//        services.AddDbContext<NerDavidDbContext>(options =>
//            options.UseSqlServer(Configuration.GetConnectionString("MyDatabase")));
//        // קריאת המפתח הסודי מתוך הקובץ appsettings.json
//        var jwtKey = Configuration["Jwt:Key"];
//        var key = Encoding.ASCII.GetBytes(jwtKey);
//        services.AddAuthentication(x =>
//        {
//            x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//            x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
//        })
//        .AddJwtBearer(x =>
//        {
//            x.RequireHttpsMetadata = false; // שים לב: יש להפעיל HTTPS בסביבת ייצור
//            x.SaveToken = true;
//            x.TokenValidationParameters = new TokenValidationParameters
//            {
//                ValidateIssuerSigningKey = true,
//                IssuerSigningKey = new SymmetricSecurityKey(key),
//                ValidateIssuer = false,
//                ValidateAudience = false
//            };
//        });

//        services.AddControllers();
//    }

//    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
//    {
//        if (env.IsDevelopment())
//        {
//            app.UseDeveloperExceptionPage();
//        }
//        else
//        {
//            app.UseExceptionHandler("/Home/Error");
//            app.UseHsts();
//        }

//        app.UseHttpsRedirection();
//        app.UseRouting();
//        app.UseAuthentication(); // הוספת Authentication
//        app.UseAuthorization();

//        app.UseEndpoints(endpoints =>
//        {
//            endpoints.MapControllers(); // יש לוודא שהשורה הזו נמצאת כאן
//        });
//    }
//}
