```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```

```javascript
// pages/about.js

export default function About() {
  // This will cause a hydration mismatch error
  const message = 'Hello from the About page!';
  //This is wrong in Next.js
  document.getElementById('message').innerText = message;

  return (
    <div>
      <h1>About Page</h1>
      <div id="message"></div>
    </div>
  );
}
```