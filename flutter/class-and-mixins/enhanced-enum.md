### Enum

- we can use the **enum**, if the value will not chage anymore.
- In dart we can use basic enum as well as enhanced enum.
- **Enhanced enum** has more than one values.
- Enhanced enum smilar like **class defination**.
- It is also similar like **const object** in JS

```dart
// basic enum

enum Day {
    MON, SUN, TUE, WED, THU...
}

```

```dart
// Enhanced enum

enum Vocation {
    raider(
        title: 'Terminal Raider',
        image: 'terminal_raider.jpg',
        weapon: 'Terminal'
    ),
    junkie(
        title: 'Code Jaider',
        image: 'terminal_raider.jpg',
        weapon: 'Terminal'
    ),
    ninja(
        title: 'UX Ninja',
        image: 'terminal_raider.jpg',
        weapon: 'Terminal'
    );

    const Vocation({
        required this.title,
        required this.image,
        required this.weapon
    });

    final String title,
    final String image,
    final String weapon


}


```
