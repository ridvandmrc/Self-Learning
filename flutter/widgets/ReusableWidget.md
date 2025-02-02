### Reusable Widget

- we can craete **reusable widget**, like **react**
- And we can take argument from component
- If we want to take children we should use **unnamed params**
- otherwise we should use named variable.

```dart

class ReusableClass extends StatelessWidget {
    const ReusableClass(this.text,{super.key})

    final String text; // text is unnamed paramater, final means constant

    @override
    Widget build(BuildContext context){
        return Text(text,style TextStyle(...))
    }
}

// usage

Container(
    child: const ReusableClass('text')
)

```

### Named Parameter
- we can take named argument
- it should be in constructure.
- next to **super.key**

```dart
class NamedClass extends StatelesWidget {
    const NamedClass({super.key,
    required this.onPress,
    required this.child,
    })

    final Widget child;
    final void function() onPress;

    @override
    Widget build(BuildContext context){
        return TextButton(
            style:....,
            child:child,
            onPress:onPress
        )
    }
}
```