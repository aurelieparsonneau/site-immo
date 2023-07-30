import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Confidentialite = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl m-auto h-full">
        <h3 className="text-[#22264B] py-10 font-extrabold text-center">
          POLITIQUE DE CONFIDENTIALITÉ
        </h3>
        <p className="pb-4 text-xs">
          Politique de confidentialité. La protection des données est une partie
          importante d’un site internet. Ce modèle contient des exemples de
          texte et ne peut être publié. Le contenu de votre politique de
          confidentialité dépend des fonctionnalités que vous utilisez sur votre
          site. Il est important de personnaliser votre texte. Votre politique
          de confidentialité doit répertorier tous les composants externes que
          vous utilisez sur votre site. Le lien vers votre politique de
          confidentialité doit apparaître sur toutes les pages de votre site.
        </p>

        <p className="pb-4 text-xs">Exemple de contenu :</p>

        <ul className="pb-10 text-xs list-disc">
          <li className="pb-1">Les informations que vous recueillez.</li>

          <li className="pb-1">Comment vous recueillez les informations.</li>

          <li className="pb-1">Pourquoi vous recueillez les informations.</li>

          <li className="pb-1">Avec qui partagez vous les informations.</li>

          <li className="pb-1">Où sont stockées les informations. </li>

          <li className="pb-1">Combien de temps sont conservées les informations.</li>

          <li className="pb-1">Comment vous protégez les informations. </li>

          <li className="pb-1">
            Modifications ou mises à jour de la Politique de confidentialité.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Confidentialite;
