using FlagsTrainer.ViewModels;

namespace FlagsTrainer;

public partial class FlashcardPage : ContentPage
{
    // ViewModel is injected by the DI container — no "new" here.
    public FlashcardPage(FlashcardViewModel viewModel)
    {
        InitializeComponent();
        BindingContext = viewModel;
    }
}
