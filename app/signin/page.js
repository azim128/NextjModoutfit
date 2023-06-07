'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import {FcGoogle } from 'react-icons/fc';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const schema = Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    });

    schema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        // Handle successful form submission
        console.log('Form submitted');
        toast.success('From submitee')
        setEmail('')
        setPassword('')
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-200">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder='Type your Email....'
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 outline-none focus:bg-gray-200 active:bg-slate-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder='Your password ....'
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 outline-none focus:bg-gray-200 active:bg-slate-500"
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4 mb-2 w-full">Sign In</button>
          <p className="text-center text-gray-500 mb-2">Or sign in with</p>
          <button className="bg-indigo-400 hover:bg-indigo-800 text-white rounded py-2 px-4 w-full"><FcGoogle size={24} className='inline-block mr-3'/>Sign in with Google</button>
        </form>
        <p className='text-sm mt-3 text-center w-3/4 mx-auto'>If already have an account. Please <Link href='/signup' className='text-indigo-500 font-semibold underline'>Sign Up</Link></p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signin;
