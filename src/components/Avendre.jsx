import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ventes } from "../datas/app_vendre";
import { Link } from "react-router-dom";

const Avendre = () => {
  return (
    <div>
      <Navbar />

      {/* Container des ventes */}
      <div className="pb-10 flex flex-col md:max-w-4xl m-auto pt-5">
        {ventes.map((vente, index) => (
          <div className="md:flex">
            <div className="m-auto pr-5 pb-5 w-96">
              <img src={vente.image} alt={vente.name} />
            </div>
            <div className="flex flex-col justify-center pl-10">
              <p className="text-[#22264B] fond-bold text-3xl pb-8">
                {vente.name}
              </p>
              <p className="text-[#535B9C] pb-5">{vente.nbrePieces}</p>
              <p className="text-[#535B9C] pb-5">{vente.description}</p>
              <p className="text-[#22264B] font-bold">{vente.prix}</p>
              <div>
              <Link to="/Agents"><button className="py-2 md:px-4 text-[#22264B] hover:bg-[#22264B] hover:text-white rounded">
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

export default Avendre;
