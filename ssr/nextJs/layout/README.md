### Layout

- Next.js 13 introduces **\_app.tsx**
- This **app** rendered for all pages.
- So, we can use it as our main layout

```tsx
// pages/_app.js

import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

- If We want to use custom layout for specific page.
- We can manipulate **\_App.tsx**.

```tsx
// pages/_app.js

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.Layout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
```

### Full Example

```tsx
// Main Layout
export const BlogLayout = ({ children }: any) => {
  return (
    <div>
      <div style={{ border: "1px solid red", padding: "0.3rem" }}>
        <h3>Blog Layout Json placeholder used</h3>
      </div>
      {children}
    </div>
  );
};

// In the blog.tsx we can use like:
const Blog = () => {
  return <div>...</div>;
};

export default Blog;

Blog.pageLayout = (page: ReactElement) => {
  return <BlogLayout>{page}</BlogLayout>;
};
```

### ======> Summary

- We can use **layout** like **<Outlet />** in React.
- **\_App.tsx** was introduced in Next 13.
- for the custom layout, wen can use this **\_App.tsx**
- we should defined **PageLayout** for intended page.
- pageLayout is just a function take a parameter **ReactElement**
- we should use it as children

```tsx
Blog.pageLayout = (page: ReactElement) => {
  return <BlogLayout>{page}</BlogLayout>;
};
```
