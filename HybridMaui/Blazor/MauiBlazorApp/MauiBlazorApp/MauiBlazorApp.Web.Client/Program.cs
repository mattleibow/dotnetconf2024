using Blazored.LocalStorage;
using MauiBlazorApp.Shared.Services;
using MauiBlazorApp.Web.Client.Services;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.Services.AddBlazoredLocalStorage();

// Add device-specific services used by the MauiBlazorApp.Shared project
builder.Services.AddSingleton<IFormFactor, FormFactor>();
builder.Services.AddScoped<IGameStorage, GameStorage>();

await builder.Build().RunAsync();
