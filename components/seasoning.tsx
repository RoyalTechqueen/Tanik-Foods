import React from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoMdClose } from "react-icons/io";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Seasoning: React.FC = () => {
  // const [showMenu, setShowMenu] = useState(false);
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
              Natural Seasonings
            </h2>
          </div>
          <nav className="hidden sm:flex space-x-8 text-md">
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white rounded-lg "
              onClick={() => handleNavigate("/spices")}
            >
              <FaArrowLeft />
            </button>
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white  rounded-lg "
              onClick={() => handleNavigate("/healthymeals")}
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
              onClick={() => handleNavigate("/spices")}
            >
              <FaArrowLeft />
            </button>
            <button
              className="px-2 py-1 bg-red-700 rounded-md font-medium text-center text-white  rounded-lg "
              onClick={() => handleNavigate("/healthymeals")}
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
                src="./fish.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fish Seasoning</h3>
                <p className="text-gray-700 mb-4">
                  For Fish soups, fish grills, barbeque and lots more
                </p>
                <p>
                  {" "}
                  <strong> No Additives, No Chemical Preservatives.</strong>
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
                <h3 className="text-xl font-semibold mb-2">
                  Aromatic Stew and Soup seasoning
                </h3>
                <p className="text-gray-700 mb-4">
                  For Nigerian delicacies, Vegetable sause (Efo riro, Elegusi),
                  ogbono, white soup, ewedu, okro and lots more
                </p>
                <p>
                  {" "}
                  <strong> No Additives, No Chemical Preservatives.</strong>
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
                <h3 className="text-xl font-semibold mb-2">Curry Powder</h3>
                <p className="text-gray-700 mb-4">
                  Perfect for marinades, good flavour for meat, chicken,stew and
                  Soups.{" "}
                </p>
                <p>
                  {" "}
                  <strong> No Additives, No Chemical Preservatives.</strong>
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
                <h3 className="text-xl font-semibold mb-2">
                  Ginger, Garlic and Onion Powder
                </h3>
                <p className="text-gray-700 mb-4">
                  For Soups, Stews and Marinade
                </p>
                <p>
                  {" "}
                  <strong> No Additives, No Chemical Preservatives.</strong>
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
                <h3 className="text-xl font-semibold mb-2">Meat Seasoning</h3>
                <p className="text-gray-700 mb-4">
                  Perfect for meat marinades, meat stew and meat peppersoup.
                  Also ideal for grilling and roasting meat.
                </p>
                <p>
                  {" "}
                  <strong> No Additives, No Chemical Preservatives.</strong>
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
                <h3 className="text-xl font-semibold mb-2">
                  Multipurpose seasoning
                </h3>
                <p className="text-gray-700 mb-4">
                  Perfect for all rice dishes, pasta, beans, assorted stew, for
                  barbeque and lots more
                </p>
                <p>
                  {" "}
                  <strong> No Additives, No Chemical Preservatives.</strong>
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
                <h3 className="text-xl font-semibold mb-2">
                  Yaji Chilli Seasoning
                </h3>
                <p className="text-gray-700 mb-4">
                  To marinate meat, chicken, fish. For grilling, roasting or
                  frying. Perfect sprinkles on indomie, yam fries and fried egg.
                </p>
                <p>
                  {" "}
                  <strong> No Additives, No Chemical Preservatives.</strong>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./peppersoup2.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  PepperSoup Seasoning
                </h3>
                <p className="text-gray-700 mb-4">
                  perfect for all forms of peppersoup(fish,meat or chicken).
                  Tanik peppersoup gives you the original taste you desire.
                </p>
                <p>
                  {" "}
                  <strong> No Additives, No Chemical Preservatives.</strong>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./rice enchant.jpg "
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Rice Enchant Jollof/Fried rice Seasoning
                </h3>
                <p className="text-gray-700 mb-4">
                  Perfect for jollof rice, spaghetti, fried rice and Stir Fries.
                  <p>
                    {" "}
                    <strong> No Additives, No Chemical Preservatives.</strong>
                  </p>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./chicken.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Chicken Seasoning
                </h3>
                <p className="text-gray-700 mb-4">
                  For chicken marinade, grills, chicken stew and lots more.
                  <p>
                    {" "}
                    <strong> No Additives, No Chemical Preservatives.</strong>
                  </p>
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
