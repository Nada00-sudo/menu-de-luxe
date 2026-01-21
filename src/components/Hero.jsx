import heroVideo from '../assets/video_hero.mp4'
import { useEffect, useState, useRef } from 'react'
import './Hero.css'

const texts = [
  {
    title: 'BIENVENUE À MAJESTIC',
    subtitle:
      'Chaque détail raconte une histoire,\nchaque plat révèle l’âme de la gastronomie marocaine',
  },
  {
    title: 'UNE EXPÉRIENCE UNIQUE',
    subtitle:
      'L’élégance, le raffinement et la tradition s’unissent au cœur de chaque création, où le temps sublime les saveurs et chaque geste raconte un héritage précieux.',
  },
  {
    title: 'SAVEURS D’EXCEPTION',
    subtitle:
      'Chaque création est une œuvre, chaque saveur une émotion, chaque instant une célébration de la gastronomie marocaine dans toute sa splendeur.',
  },
]

function Hero() {
    const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log('Autoplay was prevented:', error))
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false) // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length)
        setVisible(true) // fade in
      }, 1000)
    }, 9000) // change toutes les 4s

    return () => clearInterval(interval)
  }, [])
  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
       <div className={`hero-content ${visible ? 'show' : 'hide'}`}>
        <h1>{texts[index].title}</h1>
        <p>
          {texts[index].subtitle.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}

export default Hero
