import "./index.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="mx-auto h-full w-full overflow-auto ">
      <header className="bg-white z-10 fixed top-0 left-0 right-0 shadow-md">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-6 sm:px-6">
          <div className="flex items-center">
            <img src="./logo.png" alt="logo" className="h-12" />
          </div>
          <nav className="hidden sm:flex space-x-8 text-md">
            <a href="#about" className="hover:text-gray-600">
              About
            </a>
            <a href="#services" className="hover:text-gray-600">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-600">
              Contact
            </a>
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
            <a
              href="#home"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* home section */}
      <section
        className="relative flex items-center justify-center min-h-screen bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(./spice3.jpg)",
        }}
        id="home"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="font-display text-4xl font-extrabold mx-auto max-w-2xl tracking-tight sm:text-6xl md:text-7xl">
            <span className="block">Welcome to</span>
            <span className="block  text-red-600 text-6xl sm:text-7xl md:text-8xl">
              Tanik Foods
            </span>
            <span className="block">Store.</span>
          </h1>
          <p className="max-w-2xl mb-6 font-medium mt-3 text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
            Where Spice is Life and Health is wealth.
          </p>
          <button className="px-2 py-2 bg-red-700 rounded-md">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Explore our Selection
            </a>
          </button>
        </div>
      </section>

      {/* about section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
            About Tanik Foods
          </h2>
          <p className="mt-4 text-lg text-gray-500 text-center">
            Welcome to <strong>Tanik Foods,</strong>your one-stop destination
            for natural spices, seasonings, and healthy meals. Our mission is to
            promote a healthy lifestyle through high-quality, natural products.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
              <p className="mt-2 text-gray-600">
                At Tanik Foods, we started with a passion for natural
                ingredients and a commitment to health and wellness. Founded in
                [2022], our journey has been driven by the desire to provide the
                most natural spices and seasonings to our customers. Over the
                years, we have expanded our offerings to include a variety of
                healthy meals and pastry mixes, ensuring that every product we
                offer meets our high standards of quality and taste.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-2 text-gray-600">
                Our vision is to be a leading provider of natural spices, known
                for our commitment to quality and customer satisfaction. We
                believe that food should be both delicious and nutritious, and
                we strive to inspire healthier eating habits with our wide range
                of products. From natural spices and seasonings to healthy meals
                and pastry mixes, we are dedicated to helping you create
                delicious, wholesome meals that nourish your body and delight
                your taste buds.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Our Products
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              Discover our wide range of natural foods designed to enhance your
              culinary creations:
            </p>
            <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">Natural Spices:</span> Fresh and
                aromatic spices to elevate your dishes.
              </li>
              <li>
                <span className="font-bold">Natural Seasonings:</span> Perfect
                blends to add flavor and nutrition.
              </li>
              <li>
                <span className="font-bold">Healthy Meals:</span> Nutritious
                options like oats meal, unripe plantain, and wheat.
              </li>
              <li>
                <span className="font-bold">Pastry Mixes:</span> Easy-to-make
                mixes for puff puff,pancake, buns, and cakes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* services section */}
      <section id="services">
        <section className="py-12 bg-gray-200">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Explore Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Category Cards */}

              <div className="bg-white rounded-lg shadow-md">
                <img
                  src="./spice1.png"
                  alt="Natural Seasonings"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Natural Spices</h3>
                  <p className="text-gray-700 mb-4">
                    Discover our range of natural seasonings made from the
                    finest ingredients.
                  </p>
                  <button className="px-2 py-2 bg-red-700 rounded-md ">
                    <a href="#seasonings" className="btn btn-primary">
                      Learn More
                    </a>
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src="./spice1.png"
                  alt="Natural Seasonings"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Natural Spices</h3>
                  <p className="text-gray-700 mb-4">
                    Discover our range of natural seasonings made from the
                    finest ingredients.
                  </p>
                  <button className="px-2 py-2 bg-red-700 rounded-md ">
                    <a href="#seasonings" className="btn btn-primary">
                      Learn More
                    </a>
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src="./spice1.png"
                  alt="Natural Seasonings"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Natural Spices</h3>
                  <p className="text-gray-700 mb-4">
                    Discover our range of natural seasonings made from the
                    finest ingredients.
                  </p>
                  <button className="px-2 py-2 bg-red-700 rounded-md ">
                    <a href="#seasonings" className="btn btn-primary">
                      Learn More
                    </a>
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src="./spice1.png"
                  alt="Natural Seasonings"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Natural Spices</h3>
                  <p className="text-gray-700 mb-4">
                    Discover our range of natural seasonings made from the
                    finest ingredients.
                  </p>
                  <button className="px-2 py-2 bg-red-700 rounded-md">
                    <a href="#seasonings" className="btn btn-primary">
                      Learn More
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="seasonings" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Natural Seasonings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="product-image.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="/spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            {/* Repeat similar structure for other products */}
          </div>
        </div>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Natural Seasonings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="product-image.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="/spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            {/* Repeat similar structure for other products */}
          </div>
        </div>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Natural Seasonings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="product-image.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="/spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            {/* Repeat similar structure for other products */}
          </div>
        </div>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Natural Seasonings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="product-image.jpg"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="./spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="/spices1.png"
                alt="Product Name"
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Product Name</h3>
                <p className="text-gray-700 mb-4">
                  Brief description of the product.
                </p>
                <p className="text-gray-700 font-semibold mb-2">$19.99</p>
                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
            {/* Repeat similar structure for other products */}
          </div>
        </div>
      </section>

      {/* contact Page */}
      <section id="contact"></section>

      <footer className="bg-gray-100 text-black p-5 relative">
        <div className="max-w-6xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="flex flex-col mb-4 w-full ">
            <nav className=" flex flex-1 justify-center align-center space-x-10 text-md">
              <a href="#features" className="hover:text-gray-600">
                About
              </a>
              <a href="#how-it-works" className="hover:text-gray-600">
                Services
              </a>
              <a href="#contact" className="hover:text-gray-600">
                Contact
              </a>
            </nav>
          </div>
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Tanik Foods. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
