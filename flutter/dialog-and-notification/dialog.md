### Dialog

- we can use **showDialog** function to show a dialog.
- it takes **context** and **builder function**.
- As a return value, we can use AlertDialog which takes **title, content and actions**

```dart
showDialog(context:context, builder:(ctx) => {
    return AlertDialog(
        title: Text('title'),
        content:Text('content'),
        actions: [
            button(onPress:(){
                Navigator.pop(ctx); // To close the navigator
            }),
            button(),
        ],
        actionsAlignemnt:MainAxisAlignment.center
    );
})

```
