import './Menu.css';
import heroImage from '../assets/plat_hero.png'
import design from '../assets/ddess.jpg'
function Menu() {
  return (
    <>
      <section className="heroHero">
  <div className="image-wrapper">
    <img src={heroImage} alt="image" className="imagehero" />
  </div>

  <div className="hero-contentf">
    <h1>Notre Menu</h1>
    <p>
      Un menu d'exception où chaque plat, élaboré à partir de produits nobles
      et sublimé par un savoir-faire raffiné, offre une expérience gastronomique
      élégante et inoubliable.
    </p>
  </div>
</section>
    <div class="pattern-band"></div>
    <div class="menuback">
    <div class="menuMenu">
    <div class="menutitle">
      <h1>MENU</h1>
      <h1>TRADITIONNEL</h1>
      <br></br>
    </div>
   
    <div >
      <div>
      <h2 class="menuminititle">Entrées</h2>
      <div class="menudesc">
      <span>Zaalouk d’aubergines fumées</span>
      <span>Taktouka de tomates et poivrons confits</span>
      <span>Salade de carottes au cumin et à la coriandre</span>
      <span>Salade de betteraves à la fleur d’oranger</span>
      <span>Briouates croustillantes (viande hachée, fromage ou fruits de mer)</span>
      <span>Pastilla au poulet et aux amandes, délicatement parfumée à la cannelle</span>
      </div>
      </div>
      <br></br>
      <div>
        <h2 class="menuminititle">Plats Traditionnels</h2>
      <div class="menudesc">
      <span>Tajine d’agneau aux pruneaux et amandes grillées</span>
<span>Tajine de poulet au citron confit et olives</span>
<span>Tajine de kefta à la sauce tomate et œufs</span>
<span>Tajine de poisson aux légumes et chermoula</span>

<span>Couscous royal (agneau, poulet, merguez, légumes de saison)</span>
<span>Couscous aux sept légumes</span>
<span>Couscous tfaya aux oignons caramélisés et raisins secs</span>

<span>Rfissa au poulet, lentilles et msemen</span>
<span>Tanjia marrakchia cuite lentement aux épices</span>
<span>Seffa medfouna (vermicelles sucrés-salés farcis à la viande)</span>
</div>
      </div>
      
    </div>
    </div>
    </div>
    <div class="pattern-band"></div>
    </>
  )
}

export default Menu