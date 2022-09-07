### ***\<Link>***

* It is an element that lets the user navigate to another page by clicking or tapping on it.
* it renders a accessible `<a>` element with a real `href`.
* it works as we expect.
* it works as relative path so we can use `..` like command line

```tsx
import * as React from "react";
import { Link } from "react-router-dom";

function UsersIndexPage({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```