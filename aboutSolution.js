```javascript
// pages/aboutSolution.js
import { useEffect, useState } from 'react';

export default function About() {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('/api/data');
        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }
        const jsonData = await data.json();
        setJsonData(jsonData);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>About Us</h1>
      <p>Some information about us: {jsonData.message}</p>
    </div>
  );
}
```