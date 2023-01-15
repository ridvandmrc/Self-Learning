# Pages

- **Pages** is a React Component exported from a **.js, .jsx, .ts or .tsx** file in the **pages** directory. Each page is associated with a route based on **file name**

**Example**: If we create **pages/about.js** that exports a React component like below, it will be accesible at **/about**.

```tsx
export default function About() {
  return <div>About</div>;
}
```

## Pages with Dynamic Routes

- Next.js supports pages with dynamic routes. For Example, If we create a file called **pages/posts/[id].js**, then it will be accessible at **post/1, post2**

## Pre-Rendering

- By default, Next.js **pre-renders** every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by **client-side** JavaScript.

* Pre-rendering can result in better performance and SEO.

* Each generated HTML should be associated with minimal JavaScript code necessary for that page.
* When a page is loaded by the browser, its JS code runs and makes the page fully interactive.( This processed is called **hydration**)

### Two forms of Pre-rendering

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. Difference is in **when** it generates the HTML for a page.

- **Static Generation (Recommended)**: The HTML is generated at **build time** and will re-used on each request.

* **Server-side Rendering**: The HTML is generated on **each request**

* Next.js lets us **chosee** which pre-rendering from we would like to use for each page.
* Also, we can create a **"hybrid"** Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

* Also, we can use **Client-side data fetching** along with Static Generation or Server-sider Rendering.
* That means some parts of a page can be rendered entirely by client side JS.

## **Static Generation**

- If a page uses **Static Generation**, the page HTML is generated at **build time**.

* That means in production, the page HTML is generated when we run **next build**.

* This HTML will then be re-used on each request. it can be cached.

## **Static Generation without Data**

- The page does not need to fetch any data from external place

```tsx
export const About = () => <div> About </div>;
```

## **Static Generation with data**

- Some pages require fetching external data for pre-rendering.

* There are two scenerio for these:
* **Content** depends on external data: **getStaticProps** is used
* **Paths** depend on external data: **getStaticPaths**.

## Scenario 1: **Content** depends on external data

**Example:** Our blog page might need to fetch the list of blog posts from a **CMS** (Content Management System).

```tsx
// TODO: api call will be added

export default const Blog = ({ posts }) =>{
    return <ul> {posts.map((post) => <li>{post.title} </li>)}
}
```

- To fetch this data on pre-render, Next.js allows us to **export** and **async** function called **getStaticProps** from the same file.

* This function gets called at build time and lets us pass fetched data to the page's **props** on **pre-render**.

```tsx
export default function Blog({ posts }) {
  // Render posts...
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
```

### **Scenario 2**: **Paths** depend on external data

- **Next.js** allow us to create pages with **dynamic routes**. For example, we can create a file called **page/posts/[id].js** to show a single blog post based on **id**. **post/1**

* However, which **id** you want to pre-render at build time might depend on external data.

* **Example:** let's suppose that we've only added one blog post (with **id: 1**) to the database.
* In this case, we'd only want to pre-render **posts/1**, maybe later **post/2** ...etc.

* So our page **paths** that are pre-rendered depend on external data.
* we have to handle this, Next.js lets us **export** an **async** function called **getStaticPaths** from dynamic page (pages/posts/[id].js in this case).

```tsx
// This function gets called at build time
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

- Also in **pages/posts/[id].js**, we need to export **getStaticProps** so that we can getch data about the post with this **id** and use it to pre-render the page:

```tsx
export default function Post({ post }) {
  // Render post...
}

export async function getStaticPaths() {
  // ...
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}
```

## When Should I use Static Generation

- **Static generation** is recommended as much as possible because the page built once and served by **CDN**, which makes it much faster than having a server side render the page on every request.

* We can use Static GEneration for many types of pages;
  - Marketing pages
  - Blog posts and portfolios
  - E-commerce product listing
  - Help and documentation

## Server-Side Rendering

- If a page uses **Server-side Rendering**, the page HTML is generated on **each request**.

* To use Server-side Rendering for a page, we need to **export** and **async** function called **getServerSideProps**.
* This function will be called every request.

Let's look at this example:

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

### ====> SUMMARY

- **Static Generation (Recomended)**: The HTML is generated at **build time** and will be re-used on each request.

* To use Static Generation, exither export the page component, or export **getStaticProps** and **getStaticPaths** if needed.

* **Server-side Rending**: The HTML page is generated on **each request**. To make a page use Server-side Rendering, export **getServerSideProps**.
