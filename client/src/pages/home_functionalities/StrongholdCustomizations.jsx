import { useState, useEffect } from "react";
const texture = '/pics/worlds/stronghold.webp';
const assassinHero = '/pics/heroes/techy_assassin.png';

export default function StrongholdCustomizations() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isNarrow = windowWidth < 1280;
  const containerPadding = isNarrow ? " 2rem 3rem" : "5rem 7rem";
  const fontSize = isNarrow ? "1.6rem" : "2rem";
  const gap = isNarrow ? "1.5rem" : "2.5rem";

  return (
    <div style={{
      width: '100%',
      height: isNarrow?'auto':'40rem',
      backgroundImage: `url(${texture})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      padding: containerPadding,
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* Overlay translucid */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.2)',
        zIndex: 0
      }} />

      {/* Containerul principal */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: isNarrow ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: gap,
        boxSizing: 'border-box'
      }}>
        {/* Text + Button */}
        <div style={{
          width: isNarrow ? '100%' : '40%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: gap,
          color: 'white',
          fontSize: fontSize
        }}>
          <label style={{ fontFamily: "Marcellus SC" }}>
            Welcome to the Stronghold, Champion! Customize your skins, finishers, weapons, and spells to master the art of taking down your enemies.
          </label>
          <button className="play-now-gold-enhanced">Stronghold</button>
        </div>

        {/* Hero Image */}
        <div style={{
          width: isNarrow ? '65%': '40%',
          maxWidth: '100%',
          aspectRatio: '1 / 1',
        }}>
          <img src={assassinHero} alt="assassin" style={{ width: '100%', height: '100%', borderRadius:'5rem', objectFit: 'cover' , background:'rgba(252,252,252,0.2)' }} />
        </div>
      </div>
    </div>
  );
}
