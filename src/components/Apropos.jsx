import './Apropos.css';
import { useEffect, useRef, useState } from "react";
import coint_bas_droite from '../assets/coint_bas_droite.png';
import coint_bas_gauche from '../assets/coint_bas_gauche.png';
import coint_haut_droite from '../assets/coint_haut_droite.png';
import coint_haut_gauche from '../assets/coint_haut_gauche.png';
import restaut_1 from '../assets/restaut_1.jpg';
import restaut_2 from '../assets/restaut_2.jpg';
import restaut5 from '../assets/restaut5.png';

function Apropos() {

  return (
    <>
    <section id="apropos-section" class="Apropos">


  <img src={coint_bas_droite} className="corner corner-br" alt="coin bas droite"/>
  <img src={coint_bas_gauche} className="corner corner-bl" alt="coin bas gauche"/>
  <img src={coint_haut_droite} className="corner corner-tr" alt="coin haut droite"/>
  <img src={coint_haut_gauche} className="corner corner-tl" alt="coin haut gauche"/>

<div class="essetiels">
  <div class="Apropos-element">
    <div class="titre">À propos</div>
    <div class="texte">
       <div>Majestic incarne l’art de vivre à travers une expérience culinaire raffinée, où l’élégance et l’authenticité se rencontrent. Dans un cadre intimiste aux inspirations orientales, chaque détail a été soigneusement pensé pour offrir un moment d’exception.</div>
       <div class="texteBLOCK">Notre cuisine célèbre les traditions gastronomiques avec une approche contemporaine, sublimée par des produits sélectionnés avec exigence et un savoir-faire maîtrisé. Les saveurs, les textures et les arômes se dévoilent avec justesse, invitant à un véritable voyage des sens.</div> 
    </div> 
  </div>
  <div class="image_restaut">
    <img src={restaut_2} alt="restaut_2"  className="img-main" />
    <img src={restaut_1} alt="restaut_1" className="img-overlay"/>
  </div>

</div>

</section> 

    
    </>
  )
}

export default Apropos