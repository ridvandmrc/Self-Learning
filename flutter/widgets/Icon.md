### Icons

- we can use any icon from material UI icon.
- Then use the icon by Icon widget

```dart
child: Icon(
    Icons.airport_shuttle,
    color: Colors.lightBlue,
    size: 50
)

```

### Icon Button

- We can use icon button from material UI.
- we can just don **AnyButton.icon**

```dart
RaisedButton.icon(
    icon: Icon(
        Icons.mail
    ),
    label: Text('mail me'),
    color: Colors.amber
)

IconButton(
    icon: Icon(Icon.mail),
    ...
)
```
