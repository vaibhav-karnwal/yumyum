import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className=" lg:flex lg:w-full lg:h-[40vw] lg:items-center lg:justify-center lg:bg-yellow lg:-my-10">
      <section className="pt-10 my-10 ">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center -space-x-2 isolate"></div>

            <h2 className="mt-8 text-2xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
              Join <span className="border-b-8 border-white">482</span> other
              Fooders
            </h2>
            <p className="max-w-xl mx-auto mt-6 text-base text-gray-600 md:mt-10 lg:text-xl italic">
              "Experience a symphony of flavors at{" "}
              <span className="font-bold">
                Yum <span className="lg:text-white text-yellow">Yum</span>
              </span>
              . Delight in every bite and create unforgettable culinary
              moments."
            </p>
            <p>
              Join us at{" "}
              <span className="font-bold">
                Yum <span className="lg:text-white text-yellow">Yum</span>
              </span>{" "}
              and savor the beauty of delicious moments.
            </p>
            <p>Culinary joy awaits – sign up today!</p>

            <button>
              <Link
                to={"/signIn"}
                type="button"
                className="px-3 py-2 mt-8 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:text-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Join Now
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
