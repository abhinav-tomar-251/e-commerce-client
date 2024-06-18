'use client'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../lib/store/features/auth/authSlice';
import { RootState, AppDispatch } from '@/lib/store/store';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '',
  });

  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" />
      <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Register</button>
      {authState.status === 'loading' && <p>Loading...</p>}
      {authState.error && <p>{authState.error}</p>}
    </form>
  );
};

export default RegisterForm;
