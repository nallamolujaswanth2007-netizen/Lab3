import { useState, useEffect } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  // Lifted state: authentication status shared between SignIn and SignUp
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('signin'); // 'signin' or 'signup'

  // Observe re-rendering of App
  useEffect(() => {
    console.log('App component re-rendered');
  });

  const handleSignIn = (credentials) => {
    // Simulate authentication
    setIsAuthenticated(true);
    setUser({ email: credentials.email });
  };

  const handleSignUp = (credentials) => {
    // Simulate registration
    setIsAuthenticated(true);
    setUser({ email: credentials.email });
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  if (isAuthenticated) {
    return (
      <div className="app welcome-screen">
        <h1>Welcome back!</h1>
        <p>You are signed in as <strong>{user.email}</strong></p>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Authentication App</h1>
      <div className="auth-container">
        <div className="tabs">
          <button
            className={currentView === 'signin' ? 'active' : ''}
            onClick={() => setCurrentView('signin')}
          >
            Sign In
          </button>
          <button
            className={currentView === 'signup' ? 'active' : ''}
            onClick={() => setCurrentView('signup')}
          >
            Sign Up
          </button>
        </div>
        {currentView === 'signin' ? (
          <SignIn onSignIn={handleSignIn} />
        ) : (
          <SignUp onSignUp={handleSignUp} />
        )}
      </div>
    </div>
  );
}

export default App;
