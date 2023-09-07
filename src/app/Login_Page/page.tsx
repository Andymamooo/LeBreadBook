"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [loginData, setLogin] = useState({
    email: "",
    password: "",
  });

  let onLoginChange = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    setLogin({ ...loginData, [e.target.name]: e.target.value });
  };

  let handleLogin = (e) => {
    e.preventDefault();
    console.log(`handling login!`);
    router.push("/");
  };

  let handleRegister = (e) => {
    e.preventDefault();
    router.push("/Register_Page");
  };

  return (
    <div className='flex justify-center items-center h-screen mb-4'>
      <form className='flex flex-col space-y-4'>
        <div className='flex flex-col space-y-1'>
          <label>Email</label>
          <input
            name='email'
            type='email'
            placeholder='Enter email'
            value={loginData.email}
            onChange={onLoginChange}
            style={{ color: "black", background: "white" }}
            className='text-black bg-white w-full px-3 py-2 border border-gray-300 rounded'
          />
        </div>
        <div className='flex flex-col space-y-1 '>
          <label>Password</label>
          <input
            name='password'
            type='text'
            placeholder='Enter password'
            value={loginData.password}
            onChange={onLoginChange}
            style={{ color: "black", background: "white" }}
            className='text-black bg-white w-full px-3 py-2 border border-gray-300 rounded'
          />
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleLogin}
        >
          Login
        </button>
        <button>Forgot password?</button>
        <button onClick={handleRegister}>Don't have an account?</button>
      </form>
    </div>
  );
}
