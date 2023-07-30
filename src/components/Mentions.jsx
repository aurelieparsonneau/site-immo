import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Mentions = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl m-auto h-full">
        <h3 className="text-[#22264B] py-10 font-extrabold text-center">
        MENTIONS LÉGALES
        </h3>
        <p className="pb-4 text-xs">
          
Impressum. Un impressum est légalement requis dans certaines régions. Ce modèle ne contient que des informations générales et des exemples de formulation, et il n'est pas prêt à être publié. Les informations contenues dans l’impressum varient en fonction de votre entreprise ou de votre type de site web. Nous vous recommandons de demander un avis juridique pour vous aider à comprendre et à créer votre impressum.
        </p>
        <p className="pb-4 text-xs">[Nom de l'entreprise]</p>

        <ul className="pb-10 text-xs list-disc">
        <li>Dénomination sociale ou raison sociale.</li>

<li>Adresse du siège social de l’entreprise.</li>

<li>Noms des dirigeants de l’entreprise.</li>

<li>Numéro de téléphone, numéro de fax et adresse e-mail de l'entreprise.</li>

<li>Numéro d’enregistrement au registre du commerce et des sociétés  ou autre autorité applicable a l’activité.</li> 

<li>Numéro d’identification fiscale. </li>

<li>Forme Juridique de l’entreprise.</li>

<li>Montant du Capital Social.</li>

<li>Si votre site web propose des services dans le cadre d'une activité qui nécessite l'approbation d'une autorité publique, les coordonnées de l'autorité de contrôle doivent être fournies. ​​​</li>

<li>Nom, dénomination ou raison sociale et adresse et numéro de téléphone de l'hébergeur de son site.</li>

<li>Mentions relatives à l'utilisation de données personnelles.</li>

<li>Mentions relatives à l'utilisation de cookies.</li>
        </ul>

        <p className="pb-4 text-xs">La Commission européenne fournit une plateforme de règlement des litiges en ligne (OS). Cette plateforme est disponible à l'adresse http://ec.europa.eu/consumers/odr/. En tant que client, vous avez toujours la possibilité de contacter le conseil d'arbitrage de la Commission européenne. Nous ne sommes ni disposés à, ni obligés de, participer à une procédure de règlement des litiges devant un conseil d'arbitrage de la consommation.</p>

      </div>
      <Footer />
    </div>
  );
};

export default Mentions;
