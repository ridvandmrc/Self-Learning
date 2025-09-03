### Global state

- To use the data globally and persistendly, we should use it
- We can use 3rd party library to provide is like **provider**

```sh
flutter pub add provider
```

- We need a global store folder like **character_store.dart**.
- Then need to create chracter store we can use **changeNotifier** class.

```dart
// character_store.dart
class Character store extends ChangeNotifier {
    final List<Character> _characters = [...]

    get characters => _characters;
}

```

- To use the data we need to provide the store to all application

```dart
// main.dart

void main(){
    runApp(ChangeNotifierProvider(
        create: (context) => CharacterStore(), // provide it to all application
        child: MaterialApp(
            theme: ...,
            home:...
        )
    ))
}

```

- In order to use the data, we need to have **consumer** where we need the data
- Consumer can be used from the library

```dart
...
Consumer<CharacterStore>(
    builder:(context,value,child) {
        return ListView.builder(
            item.Count: value.characters.length,
            itemBuilder:(_,index){
                return CharacterCard(value.characters[index])
            }
        )
    }
)

```

- We can also update and notify the consumer
- In order to that we need to provides functions in the class.
- we can use **Provider** from **the library**

```dart
// character_store.dart
class Character store extends ChangeNotifier {
    final List<Character> _characters = [...]

    get characters => _characters;

    void addCharacter(Character  chr) => _characters.add(chr)
}

// usage

Provider.of<CharacterStore>(context,listen:false)
.addCharacter(Character(...))

```

- to notify the consumer we should call **notifyListeners** function

```dart
// character_store.dart
class Character store extends ChangeNotifier {
    final List<Character> _characters = [...]

    get characters => _characters;

    void addCharacter(Character  chr) => {

        _characters.add(chr)
        notifyListeners(); // Notify the cosumers
        }
}
```
