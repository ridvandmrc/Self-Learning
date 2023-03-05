### Mutations

- Unlike queries, mutations are typically used to **create/update/delete** data or perform server side-effects.
- For this purpose, we will use **useMutation** hook

```tsx
// Here is the example of add item to ToDo list
function App() {
  const mutation = useMutation((newTodo) => {
    return axios.post("/todos", newTodo);
  });

  return (
    <div>
      {mutation.isLoading ? (
        "Adding todo..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({ id: new Date(), title: "Do Laundry" });
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  );
}
```

- useMutation also has some attributes
  - **isIdle**: idle mode or fresh/reset
  - **isLoading**: mutation currently running
  - **isError**: mutations is error
  - **isSuccess**: The mutation was successful and mutation is available

```tsx
// This will not work in React 16 and earlier
const CreateTodo = () => {
  const mutation = useMutation((event) => {
    event.preventDefault();
    return fetch("/api", new FormData(event.target));
  });

  return <form onSubmit={mutation.mutate}>...</form>;
};

// This will work
const CreateTodo = () => {
  const mutation = useMutation((formData) => {
    return fetch("/api", formData);
  });
  const onSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(new FormData(event.target));
  };

  return <form onSubmit={onSubmit}>...</form>;
};
```

### Resetting Mutation State

- It's sometimes the case that we need to clear the **error** and **data** of a mutation request.
- To do this, we can use the **reset** function to handle this

```tsx
const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const mutation = useMutation(createTodo);

  const onCreateTodo = (e) => {
    e.preventDefault();
    mutation.mutate({ title });
  };

  return (
    <form onSubmit={onCreateTodo}>
      {mutation.error && (
        <h5 onClick={() => mutation.reset()}>{mutation.error}</h5>
      )}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <button type="submit">Create Todo</button>
    </form>
  );
};
```

### Mutation Side Effects

- **useMutation** comes with some helper options, we can handle the side effects easyly by using validation function

```tsx
useMutation(addTodo, {
  onMutate: (variables) => {
    // A mutation is about to happen!

    // Optionally return a context containing data to use when for example rolling back
    return { id: 1 };
  },
  onError: (error, variables, context) => {
    // An error happened!
    console.log(`rolling back optimistic update with id ${context.id}`);
  },
  onSuccess: (data, variables, context) => {
    // Boom baby!
  },
  onSettled: (data, error, variables, context) => {
    // Error or success... doesn't matter!
  },
});
```

## =======> Summary

- we can use **mutation** for create/delete/update
- Mutation(**useMutation**) is a react hook like **useQuery**
- It also has status like (isSuccess, isIdle ...etc)
- In order to handle sideEffect of mutation we can use callback function of **useMutation**
  ```tsx
  useMutation(addTodo, {
  onMutate: (variables) => {
  // A mutation is about to happen!

      // Optionally return a context containing data to use when for example rolling back
      return { id: 1 };

  },
  onError: (error, variables, context) => {
  // An error happened!
  console.log(`rolling back optimistic update with id ${context.id}`);
  },
  onSuccess: (data, variables, context) => {
  // Boom baby!
  },
  onSettled: (data, error, variables, context) => {
  // Error or success... doesn't matter!
  },
  });
  ```
