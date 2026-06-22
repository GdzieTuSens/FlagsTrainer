using Microsoft.Extensions.DependencyInjection;

namespace FlagsTrainer;

public partial class AppShell : Shell
{
    public AppShell(IServiceProvider services)
    {
        InitializeComponent();

        // Replace the DataTemplate-created MainPage with a DI-resolved one,
        // so CountryListViewModel receives its dependencies correctly.
        var mainPage = services.GetRequiredService<MainPage>();
        Items.Clear();
        Items.Add(new ShellContent
        {
            Title = "Flagi Europy",
            Route = "MainPage",
            Content = mainPage
        });

        // Register the study screen route so Shell can navigate to it.
        Routing.RegisterRoute("flashcard", new DependencyRouteFactory(typeof(FlashcardPage), services));
    }
}
