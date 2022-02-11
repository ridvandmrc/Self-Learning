// object attribute can be readonly

interface Person {
  readonly ID: number;
  readonly name: string;
  readonly surname: string;
  salary: number;
}

const user1: Person = {
  ID: 259,
  name: "Ridvan",
  surname: "Demirci",
  salary: 1000
};

console.log("ID: ", user1.ID);
// user1.ID = 123; // we can not assign, because ID is readonly

// Index Signature

// When we don't know name of attribute, bu only know shape of content
// we can use index signature

const listOfObject = (personnel: { [name: string]: string | number }): void => {
  Object.entries(personnel).forEach(([key, value]) => {
    console.log(value);
  });
};

listOfObject({ ...user1 });

// Intersection type

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type newType = Colorful & Circle;

const a: newType = { color: "123", radius: 2 };

// Generic type Object
// Array Operators

interface IArrayOperators<T> {
  reverseArray(): T[];
  totalElement(): T;
}

class ArrayOperators<T> implements IArrayOperators<T> {
  data: T[] = [];
  reverseArray(): T[] {
    return this.data.reduce((prev, next) => [next, ...prev], []);
  }
  totalElement(): T {
    return this.data[0];
  }
}

const arrObject1 = new ArrayOperators<number>();
arrObject1.data = [1, 2, 3];
console.log(arrObject1.reverseArray());

// ReadonlyArray

const arr2: ReadonlyArray<number> = [1, 2, 3];
// arr2[0] = 5; // not allowed, ts compiler give an error

// Tuple Array

type funcTuple = [string, (string) => void];

const useItem = <T>(initial: T): any => {
  let data = initial;

  return [
    data,
    (element: T) => {
      data = element;
    }
  ];
};

const [element, setElement] = useItem<string>("ridvan");

console.log("Element: ", element);
setElement("Rıdvan Demirci");
// console.log("Element: ", element); // it doesn't work
