import { useEffect, useState } from "react";
import Hero_Image from "../../assets/hero-image.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section >
        <div className="max-w-screen-xl mt-20 px-6 py-29 pt-10 sm:px-6 lg:flex lg:gap-16  lg:items-center lg:px-8">
          <div className="max-w-xl text-center  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold w-full text-white sm:text-5xl">
              Special <strong className="md:text-5xl text-3xl text-red-500">60% </strong>{" "} Off
            </h1>

            <p className="mt-4 max-w-lg text-white text-lg sm:text-xl/relaxed">
              For Our Books community
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center text-center">
              <Link
                to={'/signUp'}
                className="block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={Hero_Image}
              alt="Hero Images"
              className=""
            />
          </div>
          <div className="h-80 hidden  md:block w-80 top-6 right-96 blur-3xl -z-10  bg-blue-900 rounded-full absolute"></div>
          <div className="h-80 hidden  md:block w-80 top-96 right-48 bottom-0 blur-3xl -z-10  bg-violet-900 rounded-full absolute"></div>
        </div>
        {/* circles */}
        <div></div>
      </section>
    </>
  );
};

export default Hero;
