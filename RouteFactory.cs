namespace FlagsTrainer;

// Bridges MAUI Shell routing with the dependency injection container.
// Without this, Shell.GoToAsync would call "new FlashcardPage()" directly,
// bypassing DI and leaving FlashcardViewModel without its DatabaseService.
public class DependencyRouteFactory : RouteFactory
{
    private readonly Type _pageType;
    private readonly IServiceProvider _services;

    public DependencyRouteFactory(Type pageType, IServiceProvider services)
    {
        _pageType = pageType;
        _services = services;
    }

    public override Element GetOrCreate() =>
        (Element)_services.GetRequiredService(_pageType);

    public override Element GetOrCreate(IServiceProvider services) =>
        (Element)services.GetRequiredService(_pageType);
}
