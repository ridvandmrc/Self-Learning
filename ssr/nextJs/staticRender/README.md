### Get Static Props

- HTML content generate at the **build time** and will be reused when requested
- Using **Static Generation** is recomended.
- Also, You can use **Client Side Rendering** to fetch data.

* If the application need to fetch some data from CMS (Content Management System)

```tsx
export default function Blog({ posts }) {
  return (
    <div>
      {posts.map((item) => (
        <div> {item.content} </div>
      ))}
    </div>
  );
}

export const getStaticProps(){
    const res = await fetch('https://.../posts')
  const posts = await res.json()

  return {
    props :{
        posts:posts
    }
  }
}
```

### Get Static Path

- Next.JS allow us to create **dynamic** route like **post/[id]**
- However, it does not allow us to reach id directly at the build time
- So, we should handle it build time by using **getStaticPaths**
- we should not forget to add **fallback**
- Generally, it uses with **getStaticProps**

```tsx
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
```

### getServerSideRendering

- If we use **SSR**, content will be generated every request.
- it's very similar to **getStaticProps** but it's calling every request.

```tsx
export default function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
```

### =====> SUMMARY

- We should use **getStaticProps**, If content will not be changed
- it generated at the build time so it is not rendering every rendering
- If we need to use **id** for detail page or another, we should use **getStaticPaths**
- If the application needs to have dynamic content from server, we should use **getServerSideProps**
