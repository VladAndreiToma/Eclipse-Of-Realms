import { useEffect, useState } from "react";

const prefix = '/gifs/gameplay';
const gifs = ['/gameplay4.gif','/gameplay2.gif','/gameplay7.gif','/gameplay10.gif'];

export default function WhatIsEclipseOfRealms(){ 
  const [gifNo, setGifNo] = useState(0); 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => { 
    const interval = setInterval(() => setGifNo(prev => (prev + 1) % gifs.length), 2500); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { 
    const handleResize = () => setWindowWidth(window.innerWidth); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 960;

  const titleFont = isMobile ? "2rem" : isTablet ? "2.5rem" : "3rem";
  const descFont = isMobile ? "1.2rem" : isTablet ? "1.5rem" : "2.5rem";
  const paddingH = isMobile ? "2rem" : isTablet ? "2.5rem" : "3rem";
  const containerH = isMobile ? "60rem" : "40rem";

  return (
    <div style={{
      position: "relative",
      width: "100vw",
      maxWidth: "100vw",
      overflowX: "hidden",
      height: containerH,
      display: "flex",
      justifyContent: isMobile ? "flex-start" : "center", // pe mobil start, altfel centru
      alignItems: "center",
    }}>
      {/* Background GIF */}
      <img 
        src={prefix + gifs[gifNo]} 
        alt="gameplay gif" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      
      {/* Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: isMobile ? "8rem 2rem 2rem 2rem" : `0 ${paddingH}`,
        gap: "1.5rem",
        color: "white",
        zIndex: 1,
        boxSizing: "border-box",
      }}>
        <div style={{ width: "100%", maxWidth: "100%" }}>
          <h1 style={{
            fontWeight: 700,
            fontSize: titleFont,
            textTransform: "uppercase",
            wordBreak: "break-word",
            margin: 0,
          }}>
            WHAT IS <span style={{color:"#FFD700", fontStyle:"italic",fontFamily:'Cinzel Decorative'}}>ECLIPSE OF REALMS</span>
          </h1>
          <p style={{
            fontSize: descFont,
            maxWidth: "100%",
            lineHeight: 1.6,
            marginTop: "1rem",
            wordBreak: "break-word",
          }}>
            A 3D MMORPG where players explore vast open worlds, battle fierce enemies, complete epic quests, and customize their heroes. Team up for dungeons, engage in PvP, collect loot, and shape your legend in a living, persistent universe.
          </p>
        </div>
      </div>
    </div>
  );
}
