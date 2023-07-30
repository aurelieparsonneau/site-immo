import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cookies = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl m-auto h-full">
        <h3 className="text-[#22264B] py-10 font-extrabold text-center">
          POLITIQUE EN MATIÈRE DE COOKIES
        </h3>
        <h5 className="text-[#22264B] py-3 font-extrabold">
          1. Qu'est-ce qu'un cookie ?
        </h5>
        <p className="text-xs">
          Un cookie est un petit fichier constitué de lettres et de chiffres et
          téléchargé sur votre ordinateur lorsque vous accédez à certains sites
          web. En général, les cookies permettent à un site web de reconnaître
          l'ordinateur de l’utilisateur. ​ 
          
          La chose la plus importante à savoir
          sur les cookies que nous plaçons est qu'ils servent à améliorer la
          convivialité de notre site web, par exemple en mémorisant les
          préférences du site et les paramètres linguistiques.
        </p>

        <h5 className="text-[#22264B] py-3 font-extrabold">
        2. Pourquoi utilisons-nous des cookies ?
        </h5>
        <p className="text-xs">
        Nous pouvons utiliser des cookies et d'autres technologies similaires pour un certain nombre de raisons, par exemple : i- pour des besoins de sécurité ou de protection contre la fraude, et afin d'identifier et de prévenir les cyber-attaques, ii- pour vous fournir le service que vous avez choisi de recevoir de notre part, iii- pour contrôler et analyser les performances, le fonctionnement et l'efficacité de notre service et iv- d'améliorer votre expérience utilisateur.
        </p>

        <h5 className="text-[#22264B] py-3 font-extrabold">
        3. Tableau des cookies :
        </h5>
        <p className="text-xs">
        Dans cette section, vous devez mentionner les cookies que vous utilisez sur votre site. Pour plus d'informations.
        </p>

        <h5 className="text-[#22264B] py-3 font-extrabold">
        4. Vos choix :
        </h5>
        <p className="text-xs pb-10">
        Pour en savoir plus sur les cookies, notamment sur la manière de voir quels cookies ont été définis et de comprendre comment les gérer, les supprimer ou les bloquer, visitez https://aboutcookies.org/ ou https://www.allaboutcookies.org/fr/.
 

 Il est également possible d'empêcher votre navigateur d'accepter les cookies en modifiant les paramètres concernés dans votre navigateur. Vous pouvez généralement trouver ces paramètres dans le menu « Options » ou « Préférences » de votre navigateur.
  
 
 Veuillez noter que la suppression de nos cookies ou la désactivation de futurs cookies ou technologies de suivi pourront vous empêcher d'accéder à certaines zones ou fonctionnalités de nos services, ou pourront autrement affecter négativement votre expérience d'utilisateur.

 Pour refuser et empêcher que vos données soient utilisées par Google Analytics sur tous les sites web, consultez les instructions suivantes :

https://tools.google.com/dlpage/gaoptout?hl=fr.


Il se peut que nous modifiions cette politique en matière de cookies. Nous vous encourageons à consulter régulièrement cette page pour obtenir les dernières informations sur les cookies.
        </p>
        </div>
      <Footer />
    </div>
  );
};

export default Cookies;
