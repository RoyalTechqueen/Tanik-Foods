import "./index.css";
import React from "react";
import Carousel from "./slider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Home: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };

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
            <button className="px-2 py-1 bg-red-700 rounded-md">
              <a
                href="https://wa.me/+2348055284718"
                className="inline-flex items-center justify-center  text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800"
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
            <button className="px-2 py-2 bg-red-700 rounded-md">
              <a
                href="https://wa.me/+2348055284718"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800"
                onClick={() => setShowMenu(false)}
              >
                Contact Us
              </a>
            </button>
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
          <div className="space-x-5">
            <button className="px-2 py-2 bg-red-700 rounded-md">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 "
              >
                Explore our Products
              </a>
            </button>
            <button className="px-2 py-2 bg-red-700 rounded-md">
              <a
                href="https://wa.me/+2348055284718"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800"
              >
                Contact Us
              </a>
            </button>
          </div>
        </div>
      </section>

      <div>
        <Carousel />
      </div>

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
                years, we have expanded our products to include a variety of
                healthy meals, healthy teas and pastry mix, ensuring that every
                product we offer meets our high standards of quality and taste.
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
                and pastry mix, we are dedicated to helping you create
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
              Discover our wide range of natural products designed to enhance
              your healthy wellbeing:
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
                <span className="font-bold">Healthy Meals:</span> Healthy
                options like oats meal, unripe plantain, sweet potato and wheat.
              </li>
              <li>
                <span className="font-bold">Pastry Mix:</span> Easy-to-make
                mixes for puff puff,pancake, buns, and various cakes.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Category Cards */}

              <div className="bg-white rounded-lg shadow-md">
                <img
                  src="./spice1.png"
                  alt="Natural Spices"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Natural Spices
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Discover our unique collection of healthy herbs and spices.
                  </p>
                  <div className="flex justify-center items-center">
                    <button
                      className="px-2 py-2 bg-red-700 rounded-md text-white hover:text-black"
                      onClick={() => handleNavigate("/spices")}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src="./allspices.jpg"
                  alt="Natural Seasonings"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Natural Seasoning
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Explore our range of equisite natural seasonings made from
                    the finest ingredients.
                  </p>
                  <div className="flex justify-center items-center">
                    <button
                      className="px-2 py-2 bg-red-700 rounded-md text-white hover:text-black"
                      onClick={() => handleNavigate("/seasoning")}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src="./healthymeals.jpg"
                  alt="healthymeal"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Healthy Meals & Teas
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Discover our range of healthy meals and soothing teas for
                    optimal health.
                  </p>
                  <div className="flex justify-center items-center">
                    <button
                      className="px-2 py-2 bg-red-700 rounded-md text-white hover:text-black"
                      onClick={() => handleNavigate("/healthymeals")}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src="./pastry.jpg"
                  alt="pastry"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Pastry Mix
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Discover our range of easy to make pastry mix for kids's
                    delight.
                  </p>
                  <div className="flex justify-center items-center">
                    <button
                      className="px-2 py-2 bg-red-700 rounded-md text-white hover:text-black"
                      onClick={() => handleNavigate("/pastrymix")}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* contact Page */}
      <section className="bg-white " id="contact">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-blue-500 ">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
              Get in touch
            </h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              We would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100">
                  <MdOutlineEmail className="h-5 w-5" />
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 ">
                  Email
                </h2>

                <a href="mailto:tanikfoods.gmail.com" target="_blank">
                  <p className="mt-2 text-sm text-blue-500 ">
                    tanikfoods.gmail.com
                  </p>
                </a>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100 ">
                  <IoLocationOutline className="h-5 w-5" />
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 ">
                  Location
                </h2>

                <p className="mt-2 text-sm text-blue-500">
                  Opp Kiddiz Medical Center, Western Reserviour road, Ilorin,
                  Kwara State, Nigeria
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100 ">
                  <FaPhoneAlt className="h-5 w-5" />
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 ">
                  Phone
                </h2>

                <p className="mt-2 text-sm text-blue-500">
                  +2348055284718, +2347036104433
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe
                className="b-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.3759152909174!2d4.51461647406125!3d8.462776097597132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036535862842335%3A0xa65446257aa4c452!2sTanik%20Foods!5e0!3m2!1sen!2sng!4v1717868448272!5m2!1sen!2sng"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 text-black p-5 relative">
        <div className="max-w-6xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="flex flex-col mb-4 w-full ">
            <nav className=" flex flex-1 justify-center align-center space-x-10 text-md">
              <a href="#home" className="hover:text-gray-600">
                Home
              </a>
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
            <div className=" flex flex-1 justify-center align-center space-x-10 text-md mt-5">
              <a href="https://www.facebook.com/profile.php?id=61550854575528&mibextid=ZbWKwL">
                <FaFacebook className="h-8 w-8" />
              </a>
              <a href="https://www.instagram.com/tanik_foods?igsh=MWt6emN2M3B1MmxvNQ==">
                <FaInstagram className="h-8 w-8" />
              </a>
            </div>
          </div>
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Tanik Foods. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
