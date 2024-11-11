import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import './Login.css';

function Login() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
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
    <div className="login-container">
      <h2>Log in or sign up to access personalized financial content and tools</h2>
      {user ? (
        <button className="auth-button" onClick={handleLogout}>Log Out</button>
      ) : (
        <button className="auth-button" onClick={handleLogin}>Log In</button>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;