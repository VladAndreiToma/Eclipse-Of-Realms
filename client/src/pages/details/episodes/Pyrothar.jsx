import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/navigation/NavBar";
import Footer from "../../Footer";

const dungeon = '/pics/worlds/Pyrothar/pyrothar-dungeon.jpg';

// simplified landmarks (name + picture)
const landmarks = [
  { pictureName: 'pyrothar-citadel1.webp', name: 'Ashen Citadel' },
  { pictureName: 'pyrothar-citadel2.webp', name: 'Ember Fortress' },
  { pictureName: 'pyrothar-deserts.webp',   name: 'Scorched Expanse' },
  { pictureName: 'pyrothar-dungeon1.webp',  name: 'Molten Catacombs' },
  { pictureName: 'pyrothar-dungeon2.webp',  name: 'Inferno Vaults' },
  { pictureName: 'pyrothar-twin-vulcano-gate.webp', name: 'Twin Volcano Gate' },
];

const injectGlobalStyles = () => {
  if (document.getElementById("pyrothar-global-styles")) return;
  const styleSheet = document.createElement("style");
  styleSheet.id = "pyrothar-global-styles";
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes burning-fire-effect {
      0% { box-shadow:0 0 10px 4px rgba(255,120,0,0.6); }
      50% { box-shadow:0 0 18px 7px rgba(255,160,0,0.8); }
      100% { box-shadow:0 0 10px 4px rgba(255,120,0,0.6); }
    }
  `;
  document.head.appendChild(styleSheet);
};
injectGlobalStyles();

export default function Pyrothar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isNarrow = windowWidth < 1280;

  // **Adjusted sizes**: group of images now ~80% of previous (30rem -> 24rem)
  const baseImageSize = isNarrow ? "11rem" : "24rem";
  const gapContent = isNarrow ? "1.2rem" : "7rem";

  // Text larger and block moved further down
  const headingSize = isNarrow ? "2.4rem" : "3.6rem";
  const paragraphSize = isNarrow ? "1.05rem" : "1.35rem";

  const mainContainerStyle = {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${dungeon})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "white",
    // give more top padding so content sits lower on the page
    padding: isNarrow ? "1.5rem 2%" : "4rem 6%",
    boxSizing: "border-box",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.45)",
    zIndex: 1
  };

  // stacking / layout of the pile of images (keeps rotation transforms)
  const images = [
    { top: "-26%", left: "0%", transform: "rotate(-10deg) translate(-18%,10%)", z: 1 },
    { top: "-22%", left: "14%", transform: "rotate(5deg)", z: 2 },
    { top: "-4%",  left: "38%", transform: "rotate(15deg) translate(5%,-5%)", z: 3 },
    { top: "13%",  left: "-9%", transform: "rotate(-20deg)", z: 4 },
    { top: "18%",  left: "23%", transform: "rotate(10deg)", z: 5 },
  ];

  const imagePileBaseStyle = {
    position: "absolute",
    width: baseImageSize,
    height: baseImageSize,
    objectFit: "cover",
    borderRadius: "0.9rem",
    boxShadow: "0 8px 22px rgba(0,0,0,0.6)",
    transition: "transform 0.35s cubic-bezier(.2,.9,.2,1), box-shadow 0.35s, filter 0.35s",
    transformOrigin: "center center",
    cursor: "pointer",
    willChange: "transform, box-shadow, z-index",
  };

  // Hover effect: scale up, stronger glow, raise zIndex (no rotation change)
  const handleEnter = (e, imgDef) => {
    e.currentTarget.style.transform = `${imgDef.transform} scale(1.14)`; // slightly smaller than before
    e.currentTarget.style.zIndex = "999";
    e.currentTarget.style.boxShadow = "0 22px 50px rgba(255,100,20,0.30)";
    e.currentTarget.style.filter = "brightness(1.06) saturate(1.05)";
    e.currentTarget.style.animation = "burning-fire-effect 1.8s infinite alternate";
  };

  const handleLeave = (e, imgDef) => {
    e.currentTarget.style.transform = imgDef.transform;
    e.currentTarget.style.zIndex = imgDef.z;
    e.currentTarget.style.boxShadow = "0 8px 22px rgba(0,0,0,0.6)";
    e.currentTarget.style.filter = "none";
    e.currentTarget.style.animation = "none";
  };

  return (
    <div className="page">
      <NavBar style={{ zIndex: 2 }} />
      <div style={mainContainerStyle}>
        <div style={overlayStyle}></div>

        <div
          style={{
            display: "flex",
            flexDirection: isNarrow ? "column" : "row",
            alignItems: "flex-start",
            justifyContent: isNarrow ? "center" : "space-between",
            width: "100%",
            gap: gapContent,
            zIndex: 2,
            marginTop: isNarrow ? "1.6rem" : "4.2rem", // moved down more
          }}
        >
          <div style={{
            width: isNarrow ? "100%" : "38%",
            maxWidth: "900px",
            fontFamily: "Goudy Bookletter 1911",
            zIndex: 2,
          }}>
            <h1 style={{ marginTop: 0, fontSize: headingSize }}>Welcome to Pyrothar</h1>
            <p style={{ fontSize: paragraphSize }}>
              Pyrothar is a land forged by fire and stone — lava-forged fortresses, molten catacombs and volcanic wonders.
            </p>
            <p style={{ fontSize: paragraphSize }}>
              Explore landmarks, learn combat strategies, and discover hidden riches beneath the ash.
            </p>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: baseImageSize,
              position: "relative",
              height: baseImageSize,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "visible",
              zIndex: 2,
              marginTop: isNarrow ? "1rem" : "1.4rem"
            }}
          >
            {images.map((imgDef, i) => {
              const lm = landmarks[i] || landmarks[i % landmarks.length];
              return (
                <img
                  key={i}
                  src={`/pics/worlds/Pyrothar/${lm.pictureName}`}
                  alt={lm.name}
                  style={{
                    ...imagePileBaseStyle,
                    top: imgDef.top,
                    left: imgDef.left,
                    transform: imgDef.transform,
                    zIndex: imgDef.z,
                  }}
                  onMouseEnter={(e) => handleEnter(e, imgDef)}
                  onMouseLeave={(e) => handleLeave(e, imgDef)}
                  onClick={() =>
                    navigate(
                      `/discover/episodes-of-realms/pyrothar/${lm.name
                        .toLowerCase()
                        .trim()
                        .replace(/\s+/g, "-")}`
                    )
                  }
                />
              );
            })}
          </div>
        </div>
      </div>

      <Footer style={{ zIndex: 2 }} />
    </div>
  );
}
