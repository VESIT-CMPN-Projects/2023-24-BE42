import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const UsernameForm = () => {

  const navigate = useNavigate();
  const inputRef = useRef('');


  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchValue = inputRef.current.value;
    navigate(`/users?q=${searchValue}`);
  }
  return (
    <form className=" dark:bg-gray-950 bg-slate-200 px-28 mx-44" onSubmit={handleSubmit}>   
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input 
            ref = {inputRef}
            type="search" id="default-search" className="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the twitter username" required 
            
            />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-primary-800 hover:bg-primary-1000 focus:ring-4 focus:outline-none font-medium rounded-lg text-base px-4 py-2 dark:bg-primary-800 dark:hover:bg-primary-1000">Search</button>
        </div>
    </form>

  )
}
