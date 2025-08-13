import React from 'react'
import brandBackground from "../assets/SmartDot.jpg";
import { TbClock24, TbTruckDelivery } from "react-icons/tb";

const Landing = () => {
  return (
    <div>
         {/* ===== Hero Section Start ===== */}
       <div
        className="landing-section lg:mt-10 "
        style={{ backgroundImage: `url(${brandBackground})` }}
      >
        <div className="landing-content">
          <h1 className="landing-title">Smart Tech</h1>
          <h1 className="landing-title">Smarter Lifestyle</h1>
          <p>Top gadgets, great prices — the best deals in town, guaranteed</p>
        </div>
        {/* ===== Button Section Start ===== */}
        <button className="landing-btn block mx-auto mt-10">Shop Now</button>
        {/* ===== Footer Section Start ===== */}
        <div className="landing-footer flex items-center justify-between ">
          <div className="flex items-center gap-2 justify-center ">
            <span className="relative bg-blue-400 h-12 w-12 flex items-center justify-center rounded-full ml-2 ">
              <TbTruckDelivery className="text-blue-700 text-3xl " />
            </span>
            <span className="text-black">
              <h3 className="text-md font-bold">Free Shipping</h3>
              <p className="text-sm">Free Shipping on order</p>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative bg-red-300 h-12 w-12 flex items-center justify-center rounded-full ">
              <TbClock24 className="text-red-500 text-3xl " />
            </span>
            <span className="text-black">
              <h3 className="text-md font-bold">Support 24/7</h3>
              <p className="text-sm">Contact 24hrs a day</p>
            </span>
          </div>
        </div>
      </div>
      {/* ===== Card Grid Section Start ===== */}
    </div>
  )
}

export default Landing
