'use client'
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const schema = Yup.object().shape({
      fullName: Yup.string().required('Full Name is required'),
      userName: Yup.string().matches(/^\S*$/, 'Username must be a single word').required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'Password must include at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long'
        )
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    });

    schema
      .validate(
        { fullName, userName, email, password, confirmPassword },
        { abortEarly: false }
      )
      .then(() => {
        // Handle successful form submission
        console.log('Form submitted');
      })
      .catch((error) => {
        // Display validation errors using toast
        error.inner.forEach((err) => {
          toast.error(err.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });
        });
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-3/5">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 outline-none focus:bg-indigo-100 active:bg-indigo-300"
            />
          </div>
          <div className="mb-4">
            <input
              id="userName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 outline-none focus:bg-indigo-100 active:bg-indigo-300"
            />
          </div>
          <div className="mb-4">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 outline-none focus:bg-indigo-100 active:bg-indigo-300"
            />
          </div>
          <div className="mb-4">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 outline-none focus:bg-indigo-100 active:bg-indigo-300"
            />
          </div>
          <div className="mb-6">
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 outline-none focus:bg-indigo-100 active:bg-indigo-300"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4 mb-4 w-full">Sign Up</button>
          <button className="bg-indigo-400 hover:bg-indigo-800 text-white rounded py-2 px-4 w-full"><FcGoogle size={24} className='inline-block mr-3'/>Sign up with Google</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
