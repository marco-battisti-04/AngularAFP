using Microsoft.EntityFrameworkCore;
using WebApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.addDbContext<AppDbContext>(options =>
{
    options.UserMySql(builder.Configuartion.GetConnectionString("DefaultConnection")),
    new MySqlServerVersion(new Version(8, 0, 25));
    // options.UseInMemoryDatabase("Films");
});

builder.Services.AddControllers();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "WebApi", Version = "v1" });
});

builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
