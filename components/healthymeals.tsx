import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Healthymeal: React.FC = () => {
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
            <h2 className="text-3xl font-bold  text-center">
              Healthy Meals and Teas
            </h2>
          </div>
          <nav className="hidden sm:flex space-x-8 text-md">
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white rounded-lg "
              onClick={() => handleNavigate("/seasoning")}
            >
              <FaArrowLeft />
            </button>
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white  rounded-lg "
              onClick={() => handleNavigate("/pastrymix")}
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
              onClick={() => handleNavigate("/seasoning")}
            >
              <FaArrowLeft />
            </button>
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white  rounded-lg "
              onClick={() => handleNavigate("/pastrymix")}
            >
              <FaArrowRight />
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
                src="./ginger.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ginger Tea</h3>

              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./cinger.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Cinger(Cinnamon nd Ginger) Tea
                </h3>
                
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./blasmin.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Blasmin(Black seeds and mint) Tea
                </h3>
                
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./zobo.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Zobo(Hibiscus) Tea
                </h3>
                
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./oatwheat.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Oat Wheat Meal</h3>
                <p className="text-gray-700 mb-4">
                  Healthy Oats and wheat meal, can be taken as Swallow or as
                  cereals.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./wheat.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Wheat Flour</h3>
                <p className="text-gray-700 mb-4">
                  Healthy wheat meal can be taken as swallow or as cereals. Can
                  also be used to make healthy pastries such as chinchin,
                  cookies or cake.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./unripe plantain.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Unripe Plantain Flour</h3>
                <p className="text-gray-700 mb-4">
                  Healthy Swallow option.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./sweet potato.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sweet Potato Flour</h3>
                <p className="text-gray-700 mb-4">
                  Healthy Sweet potato Flour.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./oatplantain.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Oat Plantain</h3>
                <p className="text-gray-700 mb-4">
                  Healthy Combination of Plantain and Oats. Good for diabetic patient.
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

export default Healthymeal;