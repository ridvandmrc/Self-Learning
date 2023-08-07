type MyExclude<T, K> = T extends K ? never : T
type MyOmit<T extends Object, K extends keyof T> = {
    [Prop in MyExclude<keyof T, K>]?: T[Prop]
}

type flatArr<T extends any[]> = T extends (infer R)[] ? R : never


const removeKeys = <T extends Object, K extends (keyof T)[]>(obj: T, keys: K): Omit<T, flatArr<K>> => { return {} as any }


const k: MyExclude<'name' | 'surname' | 'age', 'name' | 'age'>

interface IPerson {
    name: string;
    surname: string;
    age: number
}

const person: MyOmit<IPerson, 'age'> = {}

removeKeys({ age: 12, name: 'asd', surname: 's' }, ['age', 'name'])
