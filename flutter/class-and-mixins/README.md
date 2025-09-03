### Custom Class

- we can create a custom class to use as a **type**
- It is similar like **JS class**

```dart
class Book {
    String text;
    String author;

    Book({this.text, this.author})
}

Book mybook = Book(text:'adas',author:'RD')

```

```dart
class _Test extends State<Test> {

    List<Book>  _books = [Book({text:'',author:'',text:'',author:'',text:'',author:''})]

    @override
    build(){
        return Row(
            children:_books.map((quote) => Text('${quote.text} - ${qoute.author}'))
        )
    }
}
```
