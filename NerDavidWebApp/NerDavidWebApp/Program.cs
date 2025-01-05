using Microsoft.EntityFrameworkCore;
using NerDavidWebApp.Models;
using NerDavidWebApp.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers()
 .AddJsonOptions(options =>
  {
      options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
  });
// Register CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins("http://localhost:4200")
                          .AllowAnyHeader()
                          .AllowAnyMethod());
});

// Register DbContext
builder.Services.AddDbContext<NerDavidDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("MyDatabase")).UseLazyLoadingProxies());

// Register your service
builder.Services.AddScoped<BachurimTableService>();
builder.Services.AddScoped<BachurimService>();
builder.Services.AddScoped<DisplayDataService>();
builder.Services.AddScoped<LimudService>();
// Register Swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigin"); // Enable CORS policy
app.UseAuthorization();
app.MapControllers();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    c.RoutePrefix = "swagger"; // אם אתה רוצה שהסווגר יהיה ב-root
});

app.Run();
