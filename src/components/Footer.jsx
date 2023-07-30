import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="md:flex gap-5 bg-[#464544] text-[#897D7B] pt-4">
      <section className="flex flex-col gap-1 pl-2">
        <h5 className="pb-5">
          N'HÉSITEZ PAS À NOUS CONTACTER PAR E-MAIL OU PAR TÉLÉPHONE :
        </h5>
        <div className="flex gap-6 pb-5">
          <div>
            <p>Tél : 01 23 45 67 89</p>
            <p className="cursor-pointer">E-mail: info@monsite.fr</p>
          </div>
          <div>
            <p>15, rue du Château</p>
            <p>75001 Paris, France</p>
          </div>
        </div>
        <Link to="/Mentions"><p className="cursor-pointer">Mentions légales</p></Link>
        <Link to="/Cookies"><p className="cursor-pointer">Politique en matière de cookies </p></Link>
        <Link to="/Confidentialite"><p className="cursor-pointer">Politique de confidentialité</p></Link>
        <Link to="/Utilisation"><p className="cursor-pointer">Conditions d'utilisation</p></Link>
        <p className="pt-8 pb-2">© 2035 par Dubois Immobilier. Créé par AP</p>
      </section>

      <section name="contact" className="pl-3 md:pl-20">
        <h5>
          VOUS POUVEZ ÉGALEMENT NOUS JOINDRE VIA LE FORMULAIRE CI-DESSOUS :{" "}
        </h5>

        <form className="md:flex gap-3 pb-5" method="GET" action="">
            <span className="pt-10 flex flex-col gap-3 w-80">
          <input
            className=""
            type="text"
            placeholder="Nom"
            name="nom"
          />
          <input className="" type="email" placeholder="E-mail" name="email" />
          <input className="" type="tel" placeholder="Téléphone" name="tel" />
          </span>
          <span className="pt-10 flex flex-col gap-1 md:items-end">
          <textarea
            className="w-80"
            name="message"
            rows="4"
            placeholder="Message"
          ></textarea>
          <button className="rounded bg-white w-24">Envoyer</button>
          </span>
        </form>
      </section>
    </div>
  );
};

export default Footer;
