import { useState } from 'react';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan searchTerm
    console.log('Search term:', searchTerm);
  };

  return (
    <nav className="bg-[#955530] w-full h-24 fixed top-0 left-0 shadow-lg flex items-center justify-between px-10 rounded-[50px]">
      <div className="flex items-center">
        <h1 className="text-white font-bold text-xl">Logo</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          className="bg-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="ml-2 bg-white py-2 px-4 rounded-md hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-700"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              fill="currentColor"
            />
          </svg>
        </button>
      </form>
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
            fill="currentColor"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
            fill="currentColor"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;