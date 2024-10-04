'use client'
// import React, { useState } from 'react';
// import './style.css';
// import { authentication } from './firebase';

// const Page = () => {
//   const [formData, setFormData] = useState({
//     regName: '',
//     regEmail: '',
//     regPass: '',
//     loginEmail: '',
//     loginPass: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const register = async () => {
//     const { regName, regEmail, regPass } = formData;
//     if (regName === '' || regEmail === '' || regPass === '') {
//       alert('All fields are required');
//     } else {
//       try {
//         await authentication.createUserWithEmailAndPassword(regEmail, regPass);
//         alert('User registered successfully');
//         setFormData({ ...formData, regName: '', regEmail: '', regPass: '' });
//       } catch (error) {
//         alert(error.message);
//       }
//     }
//   };

//   const login = async () => {
//     const { loginEmail, loginPass } = formData;
//     if (loginEmail === '' || loginPass === '') {
//       alert('All fields are required');
//     } else {
//       try {
//         await authentication.signInWithEmailAndPassword(loginEmail, loginPass);
//         alert('User logged in successfully');
//         setFormData({ ...formData, loginEmail: '', loginPass: '' });
//       } catch (error) {
//         alert(error.message);
//       }
//     }
//   };

//   return (
//     <div className='main_container'>
//       <div className='form_container register_container'>
//         <h3>Register</h3>
//         <div className='input_box'>
//           <input
//             type='text'
//             placeholder='User name'
//             name='regName'
//             value={formData.regName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className='input_box'>
//           <input
//             type='email'
//             placeholder='Email'
//             name='regEmail'
//             value={formData.regEmail}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className='input_box'>
//           <input
//             type='password'
//             placeholder='Create Password'
//             name='regPass'
//             value={formData.regPass}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className='button'>
//           <button onClick={register}>Register</button>
//         </div>
//       </div>

//       <div className='form_container login_container'>
//         <h3>Login</h3>
//         <div className='input_box'>
//           <input
//             type='email'
//             placeholder='Type your email'
//             name='loginEmail'
//             value={formData.loginEmail}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className='input_box'>
//           <input
//             type='password'
//             placeholder='Enter password'
//             name='loginPass'
//             value={formData.loginPass}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className='button'>
//           <button onClick={login}>Login</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '@/component/Login';
import Register from '@/component/Register';

import Home from './Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

