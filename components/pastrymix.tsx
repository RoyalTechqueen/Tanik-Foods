import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Pastrymix: React.FC = () => {
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
            <h2 className="text-3xl font-bold  text-center">Pastry Mix</h2>
          </div>
          <nav className="hidden sm:flex space-x-8 text-md">
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white rounded-lg "
              onClick={() => handleNavigate("/healthymeals")}
            >
              <FaArrowLeft />
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
              onClick={() => handleNavigate("/healthymeals")}
            >
              <FaArrowLeft />
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
        </div>
      </header>
      <div className="container mx-auto">
        <div className="mx-auto h-full w-full overflow-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Product Cards */}
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./puffpuff.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Puffpuff mix</h3>
                <p className="text-gray-700 mb-4">
                  Just add warm water and wait for few minutes before frying. And you are good to go.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./pancake.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Pancake and buns mix</h3>
                <p className="text-gray-700 mb-4">
                  Easy to make fluffy pancake by adding just few liquid ingredients.  .
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./chocolate.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chocolate cake mix</h3>
                <p className="text-gray-700 mb-4">
                  Just add oil and water and you are set to bake.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./red velvet.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Red Velvet cake mix</h3>
                <p className="text-gray-700 mb-4">
                  Just add 3 essential liquid ingredients(Egg, milk and oil) and you are good to go.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./vanilla.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vanilla Cake Mix</h3>
                <p className="text-gray-700 mb-4">
                  Easy-to-make Vanilla Cake mix without mixer. All in one bowl with simple ingredients.
                </p>
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

export default Pastrymix;
