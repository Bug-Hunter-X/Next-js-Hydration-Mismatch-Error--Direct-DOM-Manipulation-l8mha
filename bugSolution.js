```javascript
// pages/about.js
import { useEffect } from 'react';

export default function About() {
  const message = 'Hello from the About page!';

  useEffect(() => {
    document.getElementById('message').innerText = message;
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <div id="message"></div>
    </div>
  );
}
```