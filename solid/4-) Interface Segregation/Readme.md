### Interface Segregation Principle

- Segragation means keeping things separated, and **interface segregation** is about seperating the interfaces
- The principle says that many **client-specific** interface better than once **general-purpose** interface

### Let's Look at this example

```ts
public interface ParkingLot {

	void parkCar();	// Decrease empty spot count by 1
	void unparkCar(); // Increase empty spots by 1
	void getCapacity();	// Returns car capacity
	double calculateFee(Car car); // Returns the price based on number of hours
	void doPayment(Car car);
}

class Car {

}

public class FreeParking implements ParkingLot {

	@Override
	public void parkCar() {

	}

	@Override
	public void unparkCar() {

	}

	@Override
	public void getCapacity() {

	}

	@Override
	public double calculateFee(Car car) {
		return 0;
	}

	@Override
	public void doPayment(Car car) {
		throw new Exception("Parking lot is free");
	}
}
```

- Payment method is too genereic, so that we should seperate it and include different interface

