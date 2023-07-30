import { Link } from "react-router-dom";
import maison from "../images/house_38533.png";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className="flex justify-between mt-2 bg-transparent max-w-4xl m-auto h-full items-center">
      <div className="flex gap-2">
        <img className="h-10 ml-3" src={maison} alt="logo" />
        <p className="">
          Dubois <br />
          Immobilier
        </p>
      </div>
      <ul className="hidden md:flex gap-10 mr-6 cursor-pointer">
        <li><Link to="/" className=" hover:text-violet-600"> Accueil </Link></li>
        <li><Link to="/Avendre" className=" hover:text-violet-600"> A vendre </Link></li>
        <li><Link to="/Alouer" className=" hover:text-violet-600"> A louer </Link></li>
        <li><Link to="/Agents" className=" hover:text-violet-600"> Agents immobiliers </Link></li>
      </ul>


      {/* menu burger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* menu mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center font-bold text-[#22264B]"
        }
      >
        <li className="  font-bold py-6 text-2xl md:text-4xl hover:text-violet-600">
          <Link onClick={handleClick} to="/" smooth={true} duration={500}>
            Accueil
          </Link>
        </li>
        <li className="py-6 text-2xl md:text-4xl hover:text-violet-600">
          <Link onClick={handleClick} to="/Avendre" smooth={true} duration={500}>
            A vendre
          </Link>
        </li>
        <li className="py-6 text-2xl md:text-4xl hover:text-violet-600">
          <Link onClick={handleClick} to="/Alouer" smooth={true} duration={500}>
            A louer
          </Link>
        </li>
        <li className="py-6 text-2xl md:text-4xl hover:text-violet-600">
          <Link onClick={handleClick} to="/Agents" smooth={true} duration={500}>
            Agents immobiliers
          </Link>
        </li>
        {/* <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li> */}
      </ul>
      </div>
  );
};

export default Navbar;
