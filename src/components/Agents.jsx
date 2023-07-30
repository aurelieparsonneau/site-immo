import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { agents } from "../datas/agents";

const Agents = () => {
  return (
    <div>
      <Navbar />

      {/* Container des ventes */}
      <div className="fond p-5">
        <h1 className="text-[#22264B] fond-bold text-3xl pb-8 text-center">
          Nos agents
        </h1>
        <div className="md:flex gap-5 border-3 content-center items-center justify-center">
          {agents.map((agent, index) => (
            <div className="bg-white flex flex-col p-5 ">
              <img src={agent.image} alt={agent.name} />
              <p className="text-[#22264B] fond-bold text-3xl pb-8">
                {agent.name}
              </p>
              <hr />
              <p className="text-[#535B9C] pb-5">{agent.poste}</p>
              <p className="text-[#535B9C] pb-5">{agent.email}</p>
              <p className="text-[#22264B] font-bold pb-2">{agent.tel}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Agents;
