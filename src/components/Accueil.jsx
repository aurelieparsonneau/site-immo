import React from "react";
import ruelilas1 from "../images/rue-du-lilas.webp";
import cheminduprince from "../images/chemin-du-prince.webp";
import rueduroi from "../images/rue-du-roi.webp";
import muguet from '../images/muguet.webp';
import palais from '../images/palais.webp';
import loup from '../images/loup.webp';
import princes from '../images/chemin-du-prince.webp';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {faClipboard} from "react-icons/fa";
import clipboard from "../images/clipboard-regular.svg";
import key from "../images/key-solid.svg";
import map from "../images/map-location-dot-solid.svg";


const Accueil = () => {
  return (
    <div>
      <Navbar />
      {/* présentation */}
      <div className="fond md:w-full md:h-screen">
        <h1 className="text-[#22264B] text-3xl md:text-7xl pl-20 py-5 md:py-10 font-bold">
          VILLAS DE LUXE <br />
          SUR LA
          <br />
          COTE D'AZUR
        </h1>

        <p className="pl-20 font-bold text-black md:text-[#535B9C] py-5 md:py-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi optio veniam unde assumenda molestiae doloribus!
        </p>

        <Link to="/Avendre"><button className="pl-20 py-4 px-4 font-black md:text-[#22264B]  hover:text-black rounded">
          En savoir plus
        </button></Link>
      </div>

      {/* zone avec exemples de propriétés à vendre */}
      <section className="pb-10 flex flex-col md:max-w-4xl md:content-center md:m-auto pt-5">
        <h2 className="text-[#22264B] text-3xl text-center pb-10">
          PROPRIETES A VENDRE
        </h2>
        <div className="md:flex md:items-center ">
        <Link to="/Avendre"><img src={ruelilas1} className="m-auto h-80 w-96" alt="rue du lilas" /></Link>
          <div className="pl-10">
            <h2 className="text-[#22264B] text-6xl pb-5">
              RUE DU
              <br /> LILAS
            </h2>
            <p className="text-[#22264B] pb-5">3 pièces</p>
            <p className="text-[#535B9C] pb-5 flex ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem mollitia at recusandae inventore. In nobis pariatur incidunt hic deleniti.
            </p>
            <p className="text-[#535B9C] pb-4">500 000€</p>
          </div>
        </div>

        <div className="pb-10">
          <div className="md:flex md:items-center">
            <div className="pl-10">
              <h2 className="text-[#22264B] text-6xl pb-5">
                CHEMIN DU
                <br /> PRINCE
              </h2>
              <p className="text-[#22264B] pb-5">3 pièces</p>
              <p className="text-[#535B9C] pb-5 flex ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequatur quae sapiente dicta officiis enim eos, at adipisci recusandae ea.
              </p>
              <p className="text-[#535B9C]">450 000€</p>
            </div>
            <Link to="/Avendre"><img src={cheminduprince} className="m-auto h-80 w-96" alt="chemin du prince" /></Link>
          </div>
        </div>

        <div className="">
          <div className="md:flex md:items-center">
          <Link to="/Avendre"><img src={rueduroi} className="m-auto h-80 w-96" alt="rue du roi" /></Link>
            <div className="pl-10">
              <h2 className="text-[#22264B] text-6xl pb-5">
                RUE DU
                <br /> ROI
              </h2>
              <p className="text-[#22264B] pb-5">6 pièces</p>
              <p className="text-[#535B9C] pb-5 flex ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint tempora expedita exercitationem esse autem ducimus, alias quibusdam libero quod.
              </p>
              <p className="text-[#535B9C]">790 000€</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone avec exemples de propriétés à louer */}
      <section className="md:max-w-4xl content-center m-auto">
        <h2 className="text-[#22264B] text-3xl text-center pb-10">
          PROPRIETES A LOUER
        </h2>
        <div className="md:grid md:grid-cols-4 md:gap-10 justify-center items-center content-center pl-2">
          <div className="md:col-span-2">
          <Link to="/Alouer"><img
              className="pb-2 w-full h-96 mx-auto"
              src={loup}
              alt="impasse du loup"
            /></Link>
            <p className="text-[#22264B] pb-2">4 pièces</p>
            <p className="text-[#22264B] text-3xl pb-2">IMPASSE DU LOUP</p>
            <hr />
            <p className="text-[#535B9C] pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque saepe atque magnam incidunt alias temporibus harum, quam neque aperiam adipisci.
            </p>
            <p className="text-[#535B9C] pb-2">790 € / mois</p>
          </div>

          <div className="col-span-2">
          <Link to="/Alouer"><img
              className="pb-2 w-full mx-auto h-96"
              src={princes}
              alt="avenue des princes"
            /></Link>
            <p className="text-[#22264B] pb-2">3 pièces</p>
            <p className="text-[#22264B] text-3xl pb-2">AVENUE DES PRINCES</p>
            <hr />
            <p className="text-[#535B9C] pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem architecto hic sequi magni adipisci dolorem aspernatur impedit facilis quisquam.
            </p>
            <p className="text-[#535B9C] pb-2">450 € / mois</p>
          </div>

          <div className="col-span-2">
          <Link to="/Alouer"><img
              className="pb-2 w-full mx-auto h-96"
              src={muguet}
              alt="Avenue du muguet"
            /></Link>
            <p className="text-[#22264B] pb-2">3 pièces</p>
            <p className="text-[#22264B] text-3xl pb-2">AVENUE DU MUGUET</p>
            <hr />
            <p className="text-[#535B9C] pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatum eius quis consectetur, quasi ab id ullam rerum optio. Veniam!
            </p>
            <p className="text-[#535B9C] pb-2">500 € / mois</p>
          </div>

          <div className="col-span-2">
          <Link to="/Alouer"><img
              className="pb-2 w-full mx-auto h-96"
              src={palais}
              alt="rue du palais"
            /></Link>
            <p className="text-[#22264B] pb-2">2 pièces</p>
            <p className="text-[#22264B] text-3xl pb-2">
              RUE DU PALAIS
            </p>
            <hr />
            <p className="text-[#535B9C] pb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed neque maxime laudantium totam dignissimos incidunt amet quas cum reiciendis non!
            </p>
            <p className="text-[#535B9C] pb-2">450 € / mois</p>
          </div>
        </div>
      </section>

      {/* services de l'agence */}
      <section className="md:max-w-4xl m-auto pb-5">
        <div className="md:grid md:grid-cols-4">
          <p className="col-span-2 bg-[#B5B5B5] h-60 justify-center flex flex-col gap-6 pl-10 text-3xl text-[#22264B] ">
            Elue <br/> meilleure <br/> agence <br/> 2026
          </p>
          <div  className="col-span-2 h-60 justify-center flex flex-col gap-6 pl-10">
            <img src={clipboard} className="w-10 text-left" alt="" />
          <p className="pb-1 font-bold text-xl">
            Aucun frais de dossier</p>
            <div className="h-0.5 bg-[black] w-10"></div>
            <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laboriosam.</p>
          </div>
          <div  className="col-span-2 h-60 justify-center flex flex-col gap-6 pl-10">
            <img src={key} className="w-10 text-left" alt="" />
          <p className="pb-1 font-bold text-xl">
            Visites privées</p>
            <div className="h-0.5 bg-[black] w-10"></div>
            <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laboriosam.</p>
          </div>
          <div  className="col-span-2 h-60 justify-center flex flex-col gap-6 pl-10 bg-[#B5B5B5]">
            <img src={map} className="w-10 text-left" alt="" />
          <p className="pb-1 font-bold text-xl">
            4 agences en ville</p>
            <div className="h-0.5 bg-[black] w-10"></div>
            <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laboriosam.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Accueil;
