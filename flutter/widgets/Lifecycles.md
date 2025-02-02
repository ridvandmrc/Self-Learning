### Widget Lifecycles

### initState()

- initState called only once when the **widget** is **created.**

### build()

- build is triggered every time we use **setState()**.

### Dispose()

- when the **widget/state** object is removed.

```dart

class _ ChoseLocation extends State<ChooseLocation> {

    @override
    void initState(){
        super.initState();
    }

    @override
    void dispose(){}

    ...
}

```
