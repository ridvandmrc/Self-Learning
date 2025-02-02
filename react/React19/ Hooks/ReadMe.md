## UseTransition
A common use case in React apps is to perform a data mutation and then updatestate in response.
For example, if we want to receive data then when we start the progress we need to know the state like,
data is pending, data is received or error when getting the data. these should be sequential.
let's see how we are doing that in old style:

```tsx
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

    const handleSubmit = async () => {
    setIsPending(true);
    const error = await updateName(name);
    setIsPending(false);
    if (error) {
      setError(error);
      return;
    } 
    redirect("/path");
  };
```

In React 19, we can manage this stuation by using **useTransition**

```tsx
const [name,setName] = useState("")
const [error,setError] = userState(null)
const [isPending,setTransition] = useTransition();

const handleSubmit = () => {
    // in this function isPending return trueS
    startTranstion(async () => {
        const error = await updateName(name);
        ...
    })
}

```



## UseOptimistic

## UseActionState

## UseFormStatus 

## Use API