using Microsoft.Extensions.Logging;
using FlagsTrainer.Services;
using FlagsTrainer.ViewModels;
using FlagsTrainer.Converters;

namespace FlagsTrainer
{
    public static class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();
            builder
                .UseMauiApp<App>()
                .ConfigureFonts(fonts =>
                {
                    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                    fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
                });

            // Singleton = one shared instance for the whole app lifetime.
            // DatabaseService holds the DB connection, so we never want two of them.
            builder.Services.AddSingleton<DatabaseService>();
            builder.Services.AddSingleton<SettingsService>();

            // Transient = a fresh ViewModel each time FlashcardPage is opened.
            builder.Services.AddTransient<FlashcardViewModel>();
            builder.Services.AddTransient<FlashcardPage>();
            builder.Services.AddTransient<CountryListViewModel>();
            builder.Services.AddTransient<MainPage>();
            builder.Services.AddSingleton<App>();

#if DEBUG
    		builder.Logging.AddDebug();
#endif

            return builder.Build();
        }
    }
}
