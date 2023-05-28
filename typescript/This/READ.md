### This in Typescript

- In basically, we are using **this** for accessing
- But in object, this is not possible because it is not class and it does not **include proto**

```tsx
class Department {
  name: string;

  constructure(name: string) {
    this.name = name;
  }

  describe() {
    console.log("Departman is " + this.name);
  }
}

const department = new Department("Finance");
deparment.describe(); // Departman is Finance

const departmentCopy = { describe: department.describe };
departmentCopy.describe(); // Departman is undefine
```

- as we see, we can not see the describe result
- Because it can not bind to class variable directly
- we should handle it by **this**

```tsx
class Department {
  name: string;
  constructure(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Departman is " + this.name);
  }
}

const department = new Department("Accounting");
console.log(department);
console.log(department.describe());

const copyDepartment = { name: "Loo", describe: department.describe };
console.log(copyDepartment);
console.log(copyDepartment.describe());
```
