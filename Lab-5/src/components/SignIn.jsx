import { useState, useEffect } from 'react';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Derived state: button enabled only if email and password are valid
  const isFormValid = email.includes('@') && password.length >= 6;

  // Observe re-rendering
  useEffect(() => {
    console.log('SignIn component re-rendered');
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid && !isSubmitting) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSignIn({ email, password });
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`auth-form ${isSubmitting ? 'submitting' : ''}`}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isSubmitting}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" disabled={!isFormValid || isSubmitting}>
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default SignIn;