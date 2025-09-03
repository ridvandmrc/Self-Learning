### Special Widget

- Flutter has lots of special widget like Text, scaffold, appBar

**_Center:_** Center the child to the screen
**_Padding:_** Put a padding for the child.
**_Icon:_** Get an icon from material UI.

```dart
Icon(Icons.code)
```

**_SizedBox:_** Put a sized as a placeholder
**\*Expanded:** Wraps all available space
**\*TextField:** Put a input field on the screen

```dart
TextField(
    style: Google font,
    cursorColor:AppcColors.textColor,
    decoration: const InputDecoration(
        prefixIcon: Icon(Icons.person2),
        label: Text('label')
    )
)
```

**SingleChildScrollView:** This widget make the main area scrollable.

```dart
Container(
    child:SingleChildScrollView(
        child:Column(
            children: [
                ...
            ]
        )
    )
)
```

**GestureDetector:** If we want to make the widget clickable, draggable, or adding a event,
we can use the **GestureDetector** widget.

```dart
GestureDetector(
    onTap:(){},
    child:Card(
        ...
    )
)
```

**Wrap available space:** If we need to wrap all available space, we can hust use **double.inifinty**.

```dart
Padding(
    child: Container(
        width: double.infinity,
        ...
    )
)

```

**Table Widget**:
- We can use table widget from material UI.
- The flow should be Table -> List<TableRow> -> List<TableCell<List<Widget>>>

```dart
Table(
    children:widget.character.statsasFormattedList.map((stat){
        return TableRow(
            decoration: BoxDecoration(
                color: ...,
            ),
            children:[
                TableCell(
                    verticalAlignment: TableCellVerticalAlignment.middle,
                    child:Padding(
                        padding: const EdgeInsets.all(8),
                        child:Text('...'!) // ! means it graunteeds that there is always a data.
                    )
                )
            ]
        )
    })
)

```