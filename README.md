This repository demonstrates a common issue in React Router v6 where the `useParams` hook returns `undefined` even when a route is correctly matched.  The problem arises because the component may render before the route parameters are fully resolved by the router.  This example shows the problematic code and its solution using `useEffect` to ensure the parameters are available before rendering critical components.