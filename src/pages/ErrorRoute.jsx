import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotFound from '../assets/notfound.svg';

function ErrorRoute() {
  return (
    <>
      <Navbar />

      <main className="w-full mt-[5rem] max-lg:mt-[4rem] flex justify-center items-center py-16">
        <div className="flex flex-col items-center text-center px-4">
          <img src={NotFound} alt="404 Not Found" className="w-[60%] max-sm:w-[80%]" />

          <h1 className="text-3xl font-semibold mt-5 text-gray-800">Oops! Page Not Found</h1>
          <p className="text-sm text-gray-600 mt-2">The page you’re looking for doesn’t exist or has been moved.</p>

          <a 
            href="/" 
            className="mt-4 px-4 py-2 rounded-xl gradient-bg text-white transition-all duration-300 hover:opacity-90"
          >
            Go Home
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ErrorRoute;
