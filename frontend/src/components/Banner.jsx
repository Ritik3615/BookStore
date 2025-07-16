import React from "react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full order-2 md:order-1 md:w-1/2 m-3 md:m-5">
          <h1 className="text-3xl font-bold w-fit mt-20">
            Hello, Welcome here to learn something{" "}
            <span className="text-pink-600">new Everyday!!!</span>{" "}
          </h1>
          <p className=" mt-10 text-xl">
            This is a simple banner component that can be used to greet users
            and provide a brief introduction.
          </p>
          <input
            type="text"
            placeholder="Email"
            className="w-full mt-10 rounded p-2 text-black bg-slate-100"
          />
          <button className="btn btn-active btn-secondary flex justify-self-center mt-7">
            Subscribe
          </button>
        </div>
        <div className="w-full order-1 md:w-1/2 m-3 md:m-5">
          <div className="">
            <img className="h-96 w-full mt-20" src="learnerning.jpg" alt="books" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
