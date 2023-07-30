import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Utilisation = () => {
  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl m-auto h-full'>
<h3 className='text-[#22264B] py-10 font-extrabold text-center'>CONDITIONS D'UTILISATION</h3>
<p className='pb-10 text-xs'>Conditions d’utilisation. Ce modèle est un exemple de texte  qui n’est pas complet et ne peut être publié. Les conditions d'utilisation ont pour but de protéger les propriétaires de site. Ces derniers peuvent définir leurs propres conditions générales et répondre aux exigences s’imposant à eux  en matière d’information. Dans le cas d’une boutique en ligne, les informations obligatoires peuvent être par exemple, l’ajout de détails concernant les articles, les prix, les termes du contrat, la résiliation et l’annulation, Les conditions d’utilisation doivent également contenir les titres et être formulées en fonction des besoins de votre propre entreprise. Afin de vous assurer que vous respectez pleinement vos obligations légales, nous vous conseillons vivement de demander conseil à un professionnel afin de mieux comprendre quelles sont les exigences qui vous concernent spécifiquement.</p>
</div>
        <Footer/>
    </div>
  )
}

export default Utilisation