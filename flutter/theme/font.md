### Font
- we can use the font what ever we want
- just use pub.dev site and install **GoogleFonts** library

**pubspec.yaml** we should see the **google_fonts** library

```dart
Text(text, style: GoogleFonts.kanit(
    textStyle: Theme.of(context).textTheme.bodyMedium
))

```