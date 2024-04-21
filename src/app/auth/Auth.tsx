"use client";
import React from 'react';
import { useState } from 'react';
import SignIn from '@/components/auth/SignIn';
import SignUp from '@/components/auth/SignUp';


const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleAuthMode = () => {
    setIsSignIn((prevMode) => !prevMode);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission for sign-in or sign-up
  };

  return (
    <div className='flex flex-col items-center justify-center bg-indigo-200 py-11'>  
        <div className='p-8 bg-white rounded-2xl h-fit flex flex-col items-center justify-center'>

            <div>
                {isSignIn ? <SignIn /> : <SignUp />}
            </div>
            <p className='mt-4'>
                {isSignIn ? "Don't have an account? " : "Already have an account? "}
                <button onClick={toggleAuthMode} className='text-blue-600 bg-white hover:underline'>
                {isSignIn ? 'Sign Up' : 'Sign In'}
                </button>
            </p>
        </div>    
     
    </div>
  );
};

export default Auth;
