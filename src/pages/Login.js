import React, { useState } from 'react';
import { login } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Form gönderim işlevi
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Giriş başarılı olduğunda yapılacak işlemler
    } catch (error) {
      // Hata işleme
      // Hata mesajını göstermemek için bu bloğu boş bırakabilirsiniz
    }
  };

  return (
    <form className='max-w-xl mx-auto grid gap-y-4 py-4' onSubmit={handleSubmit}>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          E-posta
        </label>
        <div className='mt-1'>
          <input
            type='email'
            name='email'
            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
            placeholder='you@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Parola
        </label>
        <div className='mt-1'>
          <input
            type='password'
            name='password'
            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
            placeholder='********'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          disabled={!email || !password}
          type='submit'
          className='cursor-pointer disabled:opacity-40 px-4 py-2 w-full text-white bg-blue-500 rounded hover:bg-blue-700'
        >
          Giriş Yap
        </button>
      </div>
    </form>
  );
}

