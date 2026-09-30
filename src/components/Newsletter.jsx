import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-10">
      <div className=" max-w-[1240px]  mx-auto grid lg:grid-cols-3">
        <div className=" lg:col-span-2 my-4">
          <h1 className=" md:text-4xl sm:text-4xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow{" "}
          </h1>
          <p>Sign up to your newsletter and stay up to a date </p>
        </div>
        <div className="my-4">
          <div className=" flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 w-full rounded-md bg-white text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black rounded-full font-medium w-[200px] ml-6 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            {" "}
            We Care bout the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">privacy policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
