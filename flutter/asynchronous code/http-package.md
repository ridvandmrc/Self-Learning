### http flutter package

- we can find the package from **pub.dev**
- we can search the package and find the correct one  
- we sould add the dependency in **pubspec.yaml**

```yaml
...
dependencies:
    flutter:
        sdk: flutter
    http: ^0.12.0+2

...
```

```dart
import 'package:http/http.dart';

getData() async {
    try {
    Response response = await get('url'); // like a JS module
    Map data = jsonDecode(response.body)
    print(data)
    print(data['title'])
    }
    catch(e){
        print('caugh err $e')
        // do something
    }
}

```