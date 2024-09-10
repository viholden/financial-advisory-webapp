import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

function Login() {
  const [error, setError] = useState(null);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, 'user@example.com', 'password123')
      .then((userCredential) => {
        setError(null);
      })
      .catch((error) => {
        setError(error.message); 
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setError(null); 
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
