### Firebase 

- we can use firebase free version from https://console.firebase.google.com
- we can use install firebase console.
```sh
npm install -g firebase-tools
```

- we can include firebase in our project
```sh
dart pub global deaactivate flutter fire_cli

flutterfire configure --project=<project-name>

flutter pub add firebase_core
```

- In main file and main function we should initialize the firebase,

```dart

WidgetFlutterBinding.ensureInitialized();
await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
)
```

### Need to install firebase_store package.
- Need to install firebase store to **fetch** and **use it**.

```sh
flutter pub add cloud_firestore

flutterfire configure
```

- Also we need to make sure the sdkVersion should be **21**