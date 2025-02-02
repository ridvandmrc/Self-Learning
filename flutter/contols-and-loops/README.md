### Loops

- we can use **for loop**
- After for loop the widget should be returns

```dart
...
children:[
    const Text('count:'),
    for(int i = 0; i < sugarCount; i++) // repeat the countet sugarCount times
        Image.asset('assets/img/coffe.png')
]
...
```

### Conditions

- if is same like for **loop**, after if **condition** we should put **widget**

```dart
Row(
    children:[
        const Text('count: '),
        if(sugarCount == 0)
            const Text('No sugar...')
        for(int i = 0; i < sugarCount; i++) // repeat the countet sugarCount times
            Image.asset('assets/img/coffe.png')
    ]
)

```

### Map

- we can use **map** function like **JS**.

```dart
class _TestWidget extends State<TestWidget>{
    List<Number> nums = [0,1,2,3,4]

    @override
    Widget build(BuildContext context){
        return Contaner(
            child:Columns(
                children: nums.map((_t) => Text(_t)).toList(),
            )
        )
    }
}
```
