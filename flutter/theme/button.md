### Custom Button
- we can also create our custom button and apply our style.
-  for this one we can use **TextButton Decoration** fields

```dart
class CustomBtn extends StatelessWidget {
    const CustomBtn({
        super.key,
        required this.onPressed,
        required this.child
    })
TextButton(
    onPressed:onPressed,
    child: Container(
        padding: const EdgeInsets.symmetric(vertical:10 , horizontal: 20),
        decoration: LineadGradient(
            colors:[AppColors.primaryColor, AppColors.primaryAccent],
            begin: Alignment.topCenter,
            end:Alignment.bottomCenter
        ),
        borderRadius: const BorderRadius.all(Radius.circular(5))
    ),
    child: child
)

}

```