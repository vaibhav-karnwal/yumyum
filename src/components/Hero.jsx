import React from "react";
import image from "../assets/home.png";
import { IoCallSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative my-8 bg-white lg:w-full">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="flex items-center p-1 space-x-2 bg-gray-100 rounded-full max-w-max">
            <div className="bg-white rounded-full ">
              <p className="text-sm font-medium">Let&apos;s eat</p>
            </div>
            <p className="text-sm font-medium">
               &rarr;
            </p>
          </div>
          <h1 className="mt-8 text-3xl font-normal tracking-tight text-black md:text-4xl lg:text-6xl">
            Order Your
            <div className="font-serif text-4xl font-bold text-yellow md:text-6xl">
              {" "}
              Favourite Food
            </div>
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Satisfy your cravings, elevate your taste. Welcome to{" "}
            <span className="font-semibold text-yellow">
              Yum <span className="text-yellow">Yum</span>
            </span>
            , where every bite is a delight!.
          </p>
          <form action="" className="flex items-start mt-8 space-x-2">
            <div>
              <button
                type="button"
                onClick={() => navigate("/menu")}
                className="rounded-md bg-yellow px-3 py-2.5 text-sm font-semibold hover:text-white text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Start Searching
              </button>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="tel:+7454074319"
                type="button"
                className="rounded-md bg-yellow px-3 py-2.5 text-sm font-semibold hover:text-white text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black flex items-center gap-2"
              >
                <span>For Online Order</span>
                <IoCallSharp className="text-xl" />
              </a>
            </div>
          </form>
        </div>

        <div className="relative px-2 lg:col-span-5 xl:col-span-6 lg:mb-9">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[5/3] lg:h-[400px] xl:aspect-[3/1] lg:mt-14 rounded-3xl shadow-2xl "
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
