"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
    <div className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <a
          href='#'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <Image
            className='w-8 h-8 mr-2'
            src='/logo.svg'
            alt='Logo'
            height={54}
            width={54}
          />
        </a>
        <div className='w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Login
            </h1>
            <form className='space-y-4 md:space-y-6' action='#'>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@email.com'
                ></input>
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='••••••••'
                ></input>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Login
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Don't have an account?{" "}
                <a
                  href='#'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  onClick={handleRegister}
                >
                  Create one here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
