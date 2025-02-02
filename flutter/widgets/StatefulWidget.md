### Stateful Widgets

- If needs a variable to update and reflect to the component.
- It needs to has a **stateful** widget.
- when the state is update the build function will **re-call** again.
- we will use **statefulWidget** for it.
- statefull widget should be extended from **statefullWidget** class.
- and need to create a **createState** instance
- then we must create a new class extends from instance that is created by **createState**

```dart
class CoffeClass extends StatefulWidget {
    const CoffeClass({super.key})

    @override
    State<CoffeClass> createState() => _CoffeClass(); // state is created
}

class _CoffeClass extends State<CoffeClass> {
    int sugarCount = 0; // sugar count
    int coffeCount = 0; // coffe count

    void increaseSugar(){
        setState(sugarCount = sugarCount + 1) // setState is special function it calls build function
    }

     void increaseCoffe(){
        setState(coffeCount = coffeCount + 1)
    }


    @override
    Widget build(BuildContext context){
        return Column(
            children:[
                Row(
                    children:[
                        Text('$sugarCount') // usage of the variable,
                        Text('$coffeCount'),
                        TextButton(
                            onPress:increaseSugar,
                            children:Text('+')
                        )
                    ]
                )
            ]
        )
    }
}
```
