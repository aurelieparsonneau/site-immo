import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { locations } from "../datas/app_louer";
import { Link } from "react-router-dom";

const Alouer = () => {
  return (
    <div>
      <Navbar />

      {/* Container des ventes */}
      <div className="md:max-w-4xl content-center m-auto md:grid md:grid-cols-4 gap-10 justify-center items-center">
        {locations.map((location, index) => (
          <div className="col-span-2 p-3">
            <div className="pr-5 pb-5 ">
              <img
                className="h-64 w-96"
                src={location.image}
                alt={location.name}
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#22264B] fond-bold text-3xl pb-8">
                {location.name}
              </p>
              <p className="text-[#535B9C] pb-5">{location.nbrePieces}</p>
              <p className="text-[#535B9C] pb-5">{location.description}</p>
              <p className="text-[#22264B] font-bold pb-2">{location.prix}</p>
              <div>
              <Link to="/Agents"><button className=" border-current border-2 py-2 px-4 text-[#22264B] hover:bg-[#22264B] hover:text-white rounded-full fond-bold">
                  Visiter
                </button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Alouer;
