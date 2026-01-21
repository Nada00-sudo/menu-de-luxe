import './Home.css'
import Hero from './Hero'
import Apropos from './Apropos'
import restaut3 from '../assets/restaut_3_3.jpg'
import restaut4 from '../assets/restaut_4_4.jpg'
import frame from '../assets/Frame (2).svg'
import forchette from '../assets/forchette.png'
import couteau from '../assets/couteau.png'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <Apropos />

      <div className="pattern-band"></div>

      <div className="images">
        <img src={restaut3} className="image1" />
        <img src={restaut4} className="image2" />
      </div>

      <section id="menu-section" className="section-menu">
        <div className="grid-lines">
          {/* verticales */}
          <span className="v-line v1"></span>
          <span className="v-line v2"></span>
          <span className="v-line v3"></span>

          {/* horizontales */}
          <span className="h-line h1"></span>
          <span className="h-line h2"></span>
        </div>

        <div className="element">
          <div className="description">
            <div >
              <p>RESTAURANT</p>
              <span>Cuisine raffinée</span>
            </div>

            <div>
              <p>TERRASSE</p>
              <span>Sous les étoiles</span>
            </div>

            <div>
              <p>PATIO</p>
              <span>Calme et sérénité</span>
            </div>

            <div>
              <p>CLUB</p>
              <span>Live & clubbing</span>
            </div>
          </div>

          <div class="menu">
            <img src={forchette} alt="forchette" class="forchette" />
            <div class="lines-l1"></div>

            <img
              src={frame}
              alt="Frame"
              class="frame floating"
              onClick={() => navigate("/menu")}
              style={{ cursor: "pointer" }}
            />

            <img src={couteau} alt="couteau" class="couteau" />
          </div>
        </div>
      </section>

      <div class="pattern-band"></div>
    </>
  )
}

export default Home
