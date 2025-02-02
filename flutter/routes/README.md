### Routes

- It is a propery for **MaterialAPP**
- it can be managed by **Map** like JS.

```dart
main() => runApp(MaterialApp(
    home: Home(), // this can be create a conflict so initialRoute should be used
    initialRoute:'/home',
    routes :{
        '/':(context) => Loading(),
        '/home':(context) => Home(),
        '/location':(context) => Loaction()
    }
))

// 
Button(
    onPress:()=>{
        Navigator.pushNamed(context,'/location')
        Navigator.pushReplacementNamed(context, '/home',arguments: {
            test: 'test',
            title: 'title',
            ...
        }); // it is same like pushNamed
    }
)
```

- We can catch the router data by using **ModalRoute**

```dart
build(){
    _data = ModalRoute.of(context).settings.arguments
}
```