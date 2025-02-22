```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a Next.js app.</p>
    </div>
  );
}
```
```javascript
// pages/about.js
export default function About() {
  // This will cause an error because 'fetch' is not available in the server-side context
  const data = await fetch('/api/data');
  const jsonData = await data.json();
  return (
    <div>
      <h1>About Us</h1>
      <p>Some information about us: {jsonData.message}</p>
    </div>
  );
}
```