# Next.js Hydration Mismatch Bug

This repository demonstrates a common hydration mismatch error in Next.js applications.  The error occurs because the client-side JavaScript attempts to modify the DOM directly, leading to inconsistencies between the server-rendered HTML and the client-side state.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page. 
5. You'll see a hydration mismatch error in the browser's console.

## Solution

The provided solution uses `useEffect` to update the DOM after the component mounts. This ensures that the DOM is updated after the initial rendering, avoiding the hydration mismatch.