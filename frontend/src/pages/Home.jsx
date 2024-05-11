import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-gray-800">Welcome, User!</h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor turpis vel commodo scelerisque. Phasellus consequat, velit vel interdum elementum, tellus nunc pharetra nisl, vel aliquet velit nisi vel sapien.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
