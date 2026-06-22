using FlagsTrainer.ViewModels;

namespace FlagsTrainer;

public partial class MainPage : ContentPage
{
    public MainPage(CountryListViewModel viewModel)
    {
        InitializeComponent();
        BindingContext = viewModel;
    }
}
