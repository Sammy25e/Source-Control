import React from "react";
import single from "../assets/single.jpeg";
import Double from "../assets/Double.jpeg";
import Triple from "../assets/Triple.jpeg";

const Cards = () => {
  return (
    <div className=" w-full py-[10rem] px-10 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full border shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[3rem] bg-white"
            src={single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8 text-black">
            Single User
          </h2>
          <p className="text-center text-4xl font-bold text-black">$149</p>
          <div className="text-black text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full bg-gray-100 border shadow-xl flex flex-col  md:my-0 p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[3rem] bg-transparent  bg-white"
            src={Double}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8 text-black">
            Single User
          </h2>
          <p className="text-center text-4xl font-bold text-black">$149</p>
          <div className="text-black text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full border shadow-xl flex flex-col  p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[3rem] bg-white"
            src={Triple}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8 text-black">
            Single User
          </h2>
          <p className="text-center text-4xl font-bold text-black">$149</p>
          <div className="text-black text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
