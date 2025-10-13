import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const gifs = [
  "/gifs/game-gif1.gif",
  "/gifs/game-gif2.gif",
  "/gifs/game-gif3.gif",
  "/gifs/game-gif4.gif",
  "/gifs/game-gif5.gif"
];

export default function HomeTableau() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % gifs.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isNarrow = windowWidth < 1280;
  const containerH = isNarrow ? 'fit-content' : '40rem';
  const paddingH = isNarrow ? '1.5rem' : '3rem';

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: containerH,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      padding: isNarrow ? '2rem 1.5rem' : '0 3rem'
    }}>
      <img
        src={gifs[currentIndex]}
        alt="game stream gif"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: `0 ${paddingH}`,
        gap: '1rem',
        color: 'white',
        boxSizing: 'border-box',
        zIndex: 1
      }}>
        <label className="introduction-title">NEBULA INTERACTIVE STUDIOS</label>
        <label className="introduction-title">PRESENTS</label>
        <label className="game-title">ECLIPSE OF REALMS</label>
        <Link className="play-now-gold-enhanced" style={{textDecoration:'none'}} to='/login'>Play Now</Link>
      </div>
    </div>
  );
}
