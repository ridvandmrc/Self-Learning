### Cards

- It is just a custom widget that takes some parameters.
- Also, function can return a **Widget** like **React** application
- we can use **Card** widget from **MaterialUI**.

```dart
Widget testCart(param){
    return Card(
        margin: EdgeInsets.fromLTRB(16,16,16,0)
        child:Padding(
            padding: EdgeInsets.all(12),
            child:Column(
            children:<Widget>[Text(param.text)]
        )
    ))
}

...
body: Column(
    children: List.map(data => testCard(data))
)
...

```
