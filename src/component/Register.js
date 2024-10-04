'use client'
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authentication } from '@/app/firebase';
import '../styles/style.css';

const Register = () => {
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPass, setRegPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const register = async () => {
    if (regName === '' || regEmail === '' || regPass === '') {
      setError('Please fill in all fields.');
    } else {
      try {
        await authentication.createUserWithEmailAndPassword(regEmail, regPass);
        navigate('/home');
      } catch (error) {
        setError('Error in registration. Please try again.');
      }
    }
  };

  return (
    <div className="form-container">
      <h3>Register</h3>
      <div className="input-box">
        <input
          type="text"
          placeholder="Name"
          value={regName}
          onChange={(e) => setRegName(e.target.value)}
        />
        {error && <small className="error-text">{error}</small>}
      </div>
      <div className="input-box">
        <input
          type="email"
          placeholder="Email"
          value={regEmail}
          onChange={(e) => setRegEmail(e.target.value)}
        />
        {error && <small className="error-text">{error}</small>}
      </div>
      <div className="input-box">
        <input
          type="password"
          placeholder="Password"
          value={regPass}
          onChange={(e) => setRegPass(e.target.value)}
        />
        {error && <small className="error-text">{error}</small>}
      </div>
      <button onClick={register}>Register</button>
      <p>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
