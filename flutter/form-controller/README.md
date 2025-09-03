### Form Controller

- In flutter, we can use form fields from material UI.
- we should have controller to maintenance the fields.

```dart
final _nameController = TextEditingController();
TextField(
    controller: _nameController,
    style: ...,
    cursorColor: AppColors.textColor,
    decoration: const InputDecoration(
        prefixIcon: Icon(Icons.person_2),
        label: Text('test')
    )
)
```

### Submit Button

- After click a button, we should handle the text fields
- To do it we can use **controller.text**

```dart

void handleSubmit(){
    print(_nameController.text.trim())
}

FilledButton(
    onPressed: handleSubmit
)
```
