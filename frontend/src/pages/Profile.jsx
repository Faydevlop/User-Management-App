import React from 'react';
import Header from '../components/Header';

function Profile() {
  const loadFile = (event) => {
    const input = event.target;
    const file = input.files[0];
    const output = document.getElementById('preview_img');

    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  return (
    <>
    <Header/>
     <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex items-center space-x-6">
          <div className="shrink-0">
            <img id="preview_img" className="h-16 w-16 object-cover rounded-full" src="https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c" alt="Current profile photo" />
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              onChange={loadFile}
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
            />
          </label>
        </div>
        <div className="mt-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="name" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" style={{ height: '30px' }} />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  style={{ height: '30px' }} />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label> 
          <input type="password" name="password" id="password" autoComplete="current-password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" style={{ height: '30px' }}  />
        </div>
        <div className="flex justify-center pb-2">
        <button className="bg-violet-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </div>
      </form>
      {/* Save button */}
      
    </div>
    </>
   
  );
}

export default Profile;
