'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Img } from '@chakra-ui/react';
import Image from 'next/image';

const Page = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedPassword = localStorage.getItem('password');
    if (storedName) setName(storedName);
    if (storedPassword) setPassword(storedPassword);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        image: 'https://dummyjson.com/icon/emilys/128',
        username: name,
        password: password,
      });

      console.log('Login successful:', response.data);
      setSuccess('Login successful');
      setError('');
      setIsAuthenticated(true);
      setProfile(response.data);
      localStorage.setItem('image', 'https://dummyjson.com/icon/emilys/128');
      localStorage.setItem('name', name);
      localStorage.setItem('password', password);
    } catch (error) {
      console.error('Error during login:', error);
      setError(
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'Login failed. Please check your credentials.'
      );
      setSuccess('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setName('');
    setPassword('');
    localStorage.removeItem('image');
    localStorage.removeItem('name');
    localStorage.removeItem('password');
  };

  if (isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-sm gap-x-3">
          <img
            className="text-2xl w-14 h-14 rounded-full hover:ring-2 hover:ring-black mb-4 text-center"
            src='/images/Danesh.jpg'
            alt="Profile"
            
          />
          <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <p className="border rounded-md flex">
              <span className="w-full p-4">{profile.username}</span>
              <button type="button" className="border-l p-4 text-blue-500">Change</button>
            </p>
            <p className="border p-4 rounded-md mt-4">{profile.email}</p>
            {/* Add more profile details as needed */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute flex justify-center items-center h-screen bg-gray-100">
      <img className="object-cover relative" src="/images/bgLogin.jpg" alt="" />
      <div className="absolute w-full max-w-lg">
        <div className="text-2xl font-bold mb-4 text-center">
          <Img src={localStorage.getItem('image') || 'https://dummyjson.com/icon/emilys/128'} alt="Danesh" />
          Login
        </div>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          {success && <p className="text-green-500 text-xs italic mb-4">{success}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
