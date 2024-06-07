import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Seasoning: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
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
            <h2 className="text-3xl font-bold mb-8 text-center">
              Natural Seasonings
            </h2>
          </div>
          <nav className="hidden sm:flex space-x-8 text-md">
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white rounded-lg "
              onClick={() => handleNavigate("/")}
            >
              Back
            </button>
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white  rounded-lg "
              onClick={() => handleNavigate("/seasoning")}
            >
              Next
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
          <button
            className="block sm:hidden ml-4"
            aria-label="Toggle Menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <RxHamburgerMenu className="text-2xl" />
            )}
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-2xl"
              aria-label="Close Menu"
              onClick={() => setShowMenu(false)}
            >
              <IoMdClose />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-6">
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white  rounded-lg "
              onClick={() => handleNavigate("/seasoning")}
            >
              Next
            </button>
            <button className="px-2 py-1 bg-red-700 rounded-md">
              <a
                href="https://wa.me/+2348055284718"
                className="inline-flex items-center justify-center  text-base font-medium text-center text-white bg-primary-700 rounded-lg "
              >
                Contact Us
              </a>
            </button>
            <button className="px-2 py-2 bg-red-700 rounded-md">
              <a
                href="https://wa.me/+2348055284718"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                onClick={() => setShowMenu(false)}
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
                src="./fish.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fish Seasoning</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./aromatic.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./curry.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./ginger garlic.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./meat.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./multipurpose.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./yaji.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./fish.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./fish.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./fish.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
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

export default Seasoning;
