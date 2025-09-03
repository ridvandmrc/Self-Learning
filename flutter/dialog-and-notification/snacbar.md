### Snackbar

- If we want to show a message to user a notfication way, we should use **snackbar widget**
- to provide a notification view, we should also use **ScaffoldMessenger.of(context).showSnackbar**
- we can arrange the snackbar by using the parameters

```dart
FilledButton(
    onPressed:(){
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
            content: Text('Data has been saved.'),
            showCloseIcon: true,
            duration: const Duration(seconds: 2),
            backgroundColor: colors
        ))
    }
)

```
