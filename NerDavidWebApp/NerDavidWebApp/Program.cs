using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NerDavidWebApp.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// הוספת חיבור למסד הנתונים
builder.Services.AddDbContext<NerDavidDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("MyDatabase")));

// קריאת המפתח הסודי מתוך הקובץ appsettings.json
var jwtKey = builder.Configuration["Jwt:Key"];
var key = Encoding.ASCII.GetBytes(jwtKey);
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = true; // שים לב: יש להפעיל HTTPS בסביבת ייצור
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins("http://localhost:4200")
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});
// הוספת שירותים נוספים
builder.Services.AddControllers();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// הגדרת תצורות האפליקציה
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    c.RoutePrefix = "swagger"; // אם אתה רוצה לגשת ל-Swagger בכתובת הבסיס
});
app.UseCors("AllowSpecificOrigin");

app.UseAuthentication(); // הוספת Authentication
app.UseAuthorization();

app.MapControllers();

app.Run();
