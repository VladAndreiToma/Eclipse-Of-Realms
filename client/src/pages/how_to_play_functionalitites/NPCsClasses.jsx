import { useState, useEffect, useRef } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const militaryRanks = [
  {
    rank: "General",
    stars: "⭐⭐⭐⭐⭐",
    shields: "🛡️🛡️🛡️🛡️🛡️",
    description: "The supreme leader and rare NPC, capable of devastating attacks, unique abilities, and controlling the battlefield to challenge players.",
    loot: "Legendary weapons and armor, rare consumables, unique mission items."
  },
  {
    rank: "Lieutenant",
    stars: "⭐⭐⭐",
    shields: "🛡️🛡️🛡️🛡️",
    description: 'A powerful field commander who coordinates Captains and Elites, using advanced strategies, area attacks, and defensive tactics.',
    loot: 'Epic weapons, solid armor, top-tier consumables, rare or mission-related items.'
  },
  {
    rank: "Captain",
    stars: "⭐⭐",
    shields: "🛡️🛡️🛡️",
    description: 'An experienced officer who leads groups of Elites, strong and resilient, capable of executing attacks that hit multiple targets or inflict debuffs.',
    loot: 'Rare weapons or weapon upgrades, 2-3 consumables, chance for good armor or mission items.'
  },
  {
    rank: "Elite",
    stars: "⭐⭐⭐",
    shields: "🛡️🛡️",
    description: "A highly trained soldier, swift and dangerous, always ready to strike back with agility and skill.",
    loot: 'Rare weapons, 1-2 consumables, small chance for special equipment.'
  }
];

const dungeon = '/pics/worlds/lost-souls-dungeon.webp';

export default function ClassesOfNPCs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextCard = () => setActiveIndex(prev => (prev + 1) % militaryRanks.length);
  const prevCard = () => setActiveIndex(prev => (prev - 1 + militaryRanks.length) % militaryRanks.length);

  // Swipe gestures
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => { touchStartX = e.changedTouches[0].screenX; };
    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) nextCard();
      if (touchEndX > touchStartX + 50) prevCard();
    };

    const container = containerRef.current;
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const isNarrow = windowWidth < 1280;
  const showButtons = windowWidth >= 640; // ascundem butoanele pe telefoane
  const cardWidth = isNarrow ? "90%" : "60%";
  const cardHeight = isNarrow ? "70%" : "80%";
  const fontSizeRank = isNarrow ? "2.5rem" : "4rem";
  const fontSizeStars = isNarrow ? "2rem" : "3rem";
  const fontSizeDesc = isNarrow ? "1.5rem" : "2rem";
  const fontSizeLoot = isNarrow ? "2rem" : "2.5rem";
  const buttonSize = isNarrow ? "3rem" : "4.2rem";

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${dungeon})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "sans-serif"
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1
  };

  const buttonStyle = {
    width: buttonSize,
    height: buttonSize,
    fontSize: isNarrow ? "2rem" : "2.8rem",
    position: "absolute",
    top: "50%",
    textAlign:'center',
    background: "linear-gradient( to bottom right, #000, #111, #000)",
    color: "#888",
    display:'flex', justifyContent:"center", alignItems:"center",
    textAlign:"center",
    borderRadius: "100rem",
    boxShadow: "0 10px 15px -3px #333, 0 4px 6px -2px #111",
    cursor: "pointer",
    border: "none",
    fontWeight:'900',
    transition: "all 0.2s ease-in-out",
    zIndex: 20
  };

  const cardBaseStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transition: "all 0.7s ease-in-out",
    width: cardWidth,
    height: cardHeight,
    borderRadius: "1rem",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "1rem 2rem",
    boxSizing: "border-box",
    boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(244,244,244,0.04)"
  };

  return (
    <div style={containerStyle} ref={containerRef}>
      <div style={overlayStyle}></div>
      {militaryRanks.map((rankData, index) => {
        const diff = (index - activeIndex + militaryRanks.length) % militaryRanks.length;
        let cardStyle = { ...cardBaseStyle };

        if (diff === 0) {
          cardStyle = { ...cardStyle, opacity: 0.96, transform: "translate(-50%, -50%) scale(1)", background: "linear-gradient(to bottom right, #000, #111,#000)", zIndex: 3 };
        } else if (diff === 1) {
          cardStyle = {
            ...cardStyle,
            opacity: 0.3,
            transform: isNarrow ? "translate(-5%, -50%) scale(0.9)" : "translate(-10%, -50%) scale(0.9)",
            background: "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
            backdropFilter: "blur(10px)",
            zIndex: 2,
          };
        } else if (diff === militaryRanks.length - 1) {
          cardStyle = {
            ...cardStyle,
            opacity: 0.3,
            transform: isNarrow ? "translate(-95%, -50%) scale(0.9)" : "translate(-90%, -50%) scale(0.9)",
            background: "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
            backdropFilter: "blur(10px)",
            zIndex: 2
          };
        } else {
          cardStyle = { ...cardStyle, opacity: 0, transform: "translate(-50%, -50%) scale(0.7)", zIndex: 1 };
        }

        return (
          <div key={`${rankData.rank}-${index}`} style={cardStyle}>
            <label style={{ fontSize: fontSizeRank, fontFamily: "Cinzel", fontWeight: "900", fontStyle: "italic" }}>{rankData.rank}</label>
            <div style={{ display: "flex", flexDirection: isNarrow? "column":'row', alignItems: "center", gap: "1rem" }}>
              <span style={{ fontSize: fontSizeStars }}>{rankData.stars}</span>
              <span style={{ fontSize: fontSizeStars }}>{rankData.shields}</span>
            </div>
            <label style={{ fontSize: fontSizeDesc, fontFamily: "Cormorant Garamond" }}>{rankData.description}</label>
            <label style={{ fontSize: fontSizeLoot, fontFamily: "Pirata One", color: "#b22222" }}>{rankData.loot}</label>
          </div>
        );
      })}
      {showButtons && (
        <>
          <button
            onClick={prevCard}
            style={{ ...buttonStyle, left: "1rem" }}
            onTouchStart={e => (e.currentTarget.style.transform = "translateY(-50%) scale(1.1)")}
            onTouchEnd={e => (e.currentTarget.style.transform = "translateY(-50%) scale(1)")}
          >
            {<FaChevronCircleLeft/>}
          </button>
          <button
            onClick={nextCard}
            style={{ ...buttonStyle, right: "2rem" }}
            onTouchStart={e => (e.currentTarget.style.transform = "translateY(-50%) scale(1.1)")}
            onTouchEnd={e => (e.currentTarget.style.transform = "translateY(-50%) scale(1)")}
          >
            {<FaChevronCircleRight/>}
          </button>
        </>
      )}
    </div>
  );
}
