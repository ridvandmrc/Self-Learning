### List View Builder

- We can build a list in a minute.
- Also, ListView is a scrollable so it is easy to show too many component.
- Also, initially it does not know the available screen so we need to **wrap** it with **Expanded**
component

```dart

body: Expanded(
    child: ListView.builder(
    itemCount: arr.length,
    itemBuilder:(context,index) {
        return Container(
            color: Colors.grey[800],
            padding: const EdgeInsets.all(40),
            margin: const EdgeInsetsonly(bottom: 40),
            child:Text(arr[index])
        )
    }
))
```
