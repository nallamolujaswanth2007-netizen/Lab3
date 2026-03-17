import { useState, useEffect } from 'react';

const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Derived state: button enabled only if all fields are valid
  const isFormValid = email.includes('@') && password.length >= 6 && password === confirmPassword;

  // Observe re-rendering
  useEffect(() => {
    console.log('SignUp component re-rendered');
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid && !isSubmitting) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSignUp({ email, password });
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`auth-form ${isSubmitting ? 'submitting' : ''}`}>
      <h2>Sign Up</h2>
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
            placeholder="Create a password"
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={isSubmitting}
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit" disabled={!isFormValid || isSubmitting}>
          {isSubmitting ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignUp;