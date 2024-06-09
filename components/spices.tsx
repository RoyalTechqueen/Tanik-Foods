import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Spices: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <header className="bg-white fixed  z-10 top-0 left-0 right-0 shadow-md">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-6 sm:px-6">
          <div className="flex items-center">
            <img src="./logo.png" alt="logo" className="h-12" />
          </div>
          <div>
            <h2 className="text-3xl font-bold  text-center">Natural Spices</h2>
          </div>
          <nav className="hidden sm:flex space-x-8 text-md">
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white rounded-lg "
              onClick={() => handleNavigate("/")}
            >
              <FaArrowLeft />
            </button>
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white  rounded-lg "
              onClick={() => handleNavigate("/seasoning")}
            >
              <FaArrowRight />
            </button>
            <button className="px-2 py-1 bg-red-700 rounded-md">
              <a
                href="https://wa.me/+2348055284718"
                className="inline-flex items-center justify-center  text-base font-medium text-center text-white bg-primary-700 rounded-lg "
              >
                Contact Us
              </a>
            </button>
          </nav>
          <nav className="block sm:hidden space-x-5 text-sm">
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white  rounded-lg "
              onClick={() => handleNavigate("/")}
            >
              <FaArrowLeft />
            </button>
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white  rounded-lg "
              onClick={() => handleNavigate("/seasoning")}
            >
              <FaArrowRight />
            </button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto mt-20">
        <div className="mx-auto h-full w-full overflow-auto ">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Star Anise</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Castor seeds</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Rosemary</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cinnamon powder</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Gorontula</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Black pepper</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Anise seeds</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cameroon pepper</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cloves</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Moringa Seeds </h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Neem Powder</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tumeric</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Oregano</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fennel</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fenugreek</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chia Seeds</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Moringa Powder</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Flax Seeds</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-100 text-black p-5 relative">
        <div className="max-w-6xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Tanik Foods. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Spices;
