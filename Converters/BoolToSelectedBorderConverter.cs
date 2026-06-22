using System.Globalization;

namespace FlagsTrainer.Converters;

// Returns a highlighted color when the bound bool is true (= option is selected),
// or a subtle gray when false (= not selected).
public class BoolToSelectedBorderConverter : IValueConverter
{
    public object Convert(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        return value is true ? Color.FromArgb("#6750A4") : Color.FromArgb("#E0E0E0");
    }

    public object ConvertBack(object? value, Type targetType, object? parameter, CultureInfo culture)
        => throw new NotImplementedException();
}
