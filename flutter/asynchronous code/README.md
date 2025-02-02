### Async Code

- It is similar like **Promise** in JS
- **wait** is available here
- **Future** is similar like **Promise**

```dart
...

getData() async {
    await Future.delayed(Duration(seconds:3),(){ // it is like a setTimeout
        print('test')
    })

    String _test = Future.delated(Duration(seconds:2),(){
        print('test2')
        return 'test'
    })
}

initState(){
    super.initState()
    getData();
}
...
```
