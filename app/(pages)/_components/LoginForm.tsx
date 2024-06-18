
"use client"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../lib/store/features/auth/authSlice';
import { RootState, AppDispatch } from '@/lib/store/store';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '',
  });

  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (authState.status === 'succeeded') {
      router.push('/');
    }
  }, [authState.status, router]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Login</button>
      {authState.status === 'loading' && <p>Loading...</p>}
      {authState.error && <p>{authState.error}</p>}
    </form>
  );
};

export default LoginForm;
