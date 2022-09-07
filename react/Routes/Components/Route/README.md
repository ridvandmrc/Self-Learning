### \<Routes> and \<Route>
* They are the primary ways to render something in React Router based on the current `location`.
* We can think about a `Router` kind of like a if statement, if path match ... then ...
* Route is **case-sensitive**

* Whenever the location changes, `routers` looks through all its `children`, `Route` elements to find the best match and renders that branch of UI.
* Router may be nested to indicate nested UI.(**outlet** **should be used**)

```tsx
<Routes>
  <Route path="/" element={<Dashboard />}>
    <Route
      path="messages"
      element={<DashboardMessages />}
    />
    <Route path="tasks" element={<DashboardTasks />} />
  </Route>
  <Route path="about" element={<AboutPage />} />
</Routes>
```