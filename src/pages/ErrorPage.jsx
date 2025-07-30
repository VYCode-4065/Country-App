import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router';

const ErrorPage = () => {

    const {dark} = useSelector(state=>state?.toggleDark)

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen  px-4 text-center ${dark?'bg-slate-900 text-white':'bg-gray-100'}`}>
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className={`text-2xl font-semibold ${dark?'text-slate-400':'text-gray-800'} mb-2`}>Page Not Found</h2>
      <p className={`${dark?'text-gray-300':'text-gray-600'} mb-6`}>
        Sorry, the country you are looking for doesn’t exist .
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Go back to Homepage
      </Link>
    </div>
  );
}


export default ErrorPage