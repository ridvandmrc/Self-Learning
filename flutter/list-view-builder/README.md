### List View Builder

- we can build a list in a minute.
- 


```dart

body: ListView.builder(
    itemCount: itemCount,
    itemBuilder:(context,index) {
        return Card(
            child:ListTile(
                onTap:() {},
                title: Text('title'),
                leading: CircleAvatar(
                    backgroundImage:AssetImage('assets/...')
                )
            ) // is a flutter list view 
        )

    }
)
```
