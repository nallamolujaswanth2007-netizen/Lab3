# Lab-5: Sign-In and Sign-Up Pages with State Management in React

This lab demonstrates React state management concepts including hooks, re-rendering, state co-location, state lifting, and derived state.

## Concepts Demonstrated

### React Hooks and Re-rendering
- `useState` manages local component state (input values)
- `useEffect` observes component re-renders (check console logs)
- State changes trigger re-renders of affected components

### State Co-location
- Input state is kept local to each form component (SignIn/SignUp)
- State is placed close to where it's used and modified

### State Lifting
- Authentication status (`isAuthenticated`, `user`) is lifted to the App component
- Shared between SignIn and SignUp components via props
- Allows switching between views and showing authenticated state

### Derived State
- Submit button enabled/disabled based on form validation
- Computed from current state values without storing separately
- `isFormValid` in SignIn: email contains '@' and password >= 6 chars
- `isFormValid` in SignUp: email valid, password >= 6 chars, passwords match

## Running the App

```bash
npm install
npm run dev
```

## When Global State is Required

Global state management (e.g., Context API, Redux, Zustand) would be beneficial in these scenarios:

1. **Complex Authentication Flow**: Multiple components need access to user data, tokens, permissions
2. **App-wide User Preferences**: Theme, language, notifications settings
3. **Cross-component Communication**: Shopping cart shared between multiple pages
4. **Persistent State**: User session surviving page refreshes
5. **Server State Management**: API calls, caching, optimistic updates
6. **Large-scale Apps**: Many components sharing state, avoiding prop drilling

For this simple auth example, local + lifted state is sufficient. In a real app with routing, protected routes, and user profile management, global state would be necessary.
