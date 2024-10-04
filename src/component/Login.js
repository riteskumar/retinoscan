'use client'
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authentication } from '@/app/firebase';
import '../styles/style.css';



const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    if (loginEmail === '' || loginPass === '') {
      setError('Please fill in all fields.');
    } else {
      try {
        await authentication.signInWithEmailAndPassword(loginEmail, loginPass);
        navigate('/home');
      } catch (error) {
        setError('Incorrect email or password.');
      }
    }
  };


  const handleEmailChange = (e) => {
    setLoginEmail(e.target.value);
    if (error) setError(''); 
  };

  const handlePasswordChange = (e) => {
    setLoginPass(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="form-container">
      <h3>Login</h3>
      <div className="input-box">
        <input
          type="email"
          placeholder="Email"
          value={loginEmail}
          onChange={handleEmailChange}
        />
        {error && <small className="error-text">{error}</small>}
      </div>
      <div className="input-box">
        <input
          type="password"
          placeholder="Password"
          value={loginPass}
          onChange={handlePasswordChange}
        />
        {error && <small className="error-text">{error}</small>}
      </div>
      <button onClick={login}>Login</button>
      <p>
        Don&apos;t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;

