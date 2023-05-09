## Open-Close Principle

- This principle says that **classes should be open for extension and closed to modification.**.
- Modification means changing the code of an existing classi and extension means adding new functionality.

### Example

```ts
public class InvoicePersistence {
    Invoice invoice;

    public InvoicePersistence(Invoice invoice) {
        this.invoice = invoice;
    }

    public void saveToFile(String filename) {
        // Creates a file with given name and writes the invoice
    }

    public void saveToDatabase() {
        // Saves the invoice to database
    }
}
```

- This example is not okay for **open close principle**
- Because each save type will affect **the class**
- So that, we should use different class for saving types

```ts
interface InvoicePersistence {

    public void save(Invoice invoice);
}

public class DatabasePersistence implements InvoicePersistence {

    @Override
    public void save(Invoice invoice) {
        // Save to DB
    }
}

public class FilePersistence implements InvoicePersistence {

    @Override
    public void save(Invoice invoice) {
        // Save to file
    }
}
```

- Summary, we will crete new class for all downloading type
- So that, this class will not affect anymore.
