### Theme
* Flutter is using Material UI default theme.
* If we want to change it, we can do it by overriding **Theme** from **MaterialApp** widget.
* We should create **our ThemeData** then, we can override the theme
    - overriding **primary color (seed color)**
    - overriding **scaffoldBackgroundColor**
    - overriding **AppBarTheme**.
        - BackgroundColor, foreGroundColor, SurfaceTintColor ,centerTitle

* Also we can arrange the **textTheme**
    - headlineMedium, bodyMedium

* Instead of override the them, we can just extend the exist theme by using **TextTheme().copyWidth**
* If we want to use **textTheme**, we can give the theme as a parameters like:
    - Text('character list', style: Theme.of(context).textTheme.headlineMedium)

### Custom Theme

```dart
class AppColors {
    static Color primaryColor = const Color.fromRBGO(162, 29, 19, 1);
    static Color primaryAccent = const Color.fromRBGO(120, 14, 14, 1);
    static Color secondaryColor = const Color.fromRBGO(45, 45, 45, 1);
    static Color secondaryAccent = const Color.fromRBGO(35, 35, 35, 1);
    ...
    static Color titleColor = const Color.fromRBGO(200, 200, 200, 1);
}


ThemeData primaryTheme = ThemeData(
    
    // seed color
    colorScheme: ColorScheme.fromSeed(
        seedColor: AppColors.primaryColor,
    ),

    // scaffold color
    scaffoldBackgroundColor: AppColors.secondaryAccent,

    // app bar theme colors
    appBarTheme: AppBarTheme(
        backgroundColor: AppColors.secondaryColor,
        foregroundColor: AppColors.textColor,
        surfaceTintColor: Colors.transparent,
        centerTitle: true
    ),

    // Text Theme
    textTheme: TextTheme().copyWith(
        bodyMedium: TextStyle(
            color: AppColors.textColor,
            fontSize: 16,
            letterSpace: 1
        ),
        headlineMedium: TextStyle(
            color: Appcolors.titleColor,
            fontSize: 16,
            fontWeight: FontWeight.bold,
            letterSpacing: 1,
        )
        ...
    ),

    // card theme
    cardTheme: CardTheme(
        color: AppColors.secondaryColor.withOpacity(0.5),
        surfaceTintColor: Colors.transparent,
        shape: const RoundedRectangleBorder(),
        shadowColor: Colors.transparent,
        margin: const EdgeInsets.only(borrom: 16)
    )
)

Text('character list', style: Theme.of(context).textTheme.headlineMedium),
Text('character list', style: Theme.of(context).textTheme.titleMedium),

```