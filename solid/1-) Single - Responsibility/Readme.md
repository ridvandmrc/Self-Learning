### The Single Responsibility Principle

- The main idea of this prenciple is that **a class should do one thing and therefore it should only a single reason to change**.
- Single Responsiblity is important because many different teams can work on the same project and edit the same class for different reasons.

### Example

```ts
class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      this.logCalorieSurplus();
    }
  }

  logCalorieSurplus() {
    console.log("max calories exceed");
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalorie(500);
calorieTracker.trackCalorie(1000);
calorieTracker.trackCalorie(700);
```

- **CalorieTracker** class is simple and clean but it does not compliant with a single responsibility rule.
- Because calorieTracker is doing two different things one is **tracking the calories** and **logging calories**
- This class should do only one thing.
- So we should take off log function.
