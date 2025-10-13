import { useState, useEffect } from "react";
import { FaDesktop, FaGamepad, FaMobileAlt } from "react-icons/fa";

export default function Platform3D({ width = 700, height = 300, icons }) {
  const controlTexts = {
    pc: [
      "Mouse - Aim accurately",
      "Keyboard WASD - Move character",
      "Space - Jump over obstacles",
      "Ctrl - Crouch to hide",
      "For details, check the in-game detailed control menu",
    ],
    console: [
      "Left Stick - Move character",
      "Right Stick - Aim camera",
      "A / Cross - Jump",
      "B / Circle - Interact",
      "RT / LT - Special abilities",
      "For details, check the in-game detailed control menu",
    ],
    mobile: [
      "Tilt phone - Move character",
      "Touch screen - Shoot/actions",
      "Swipe - Aim/look around",
      "Touch buttons - Jump/special",
      "For details, check the in-game detailed control menu",
    ],
  };

  const defaultIcons = [
    { id: "pc", icon: <FaDesktop /> },
    { id: "console", icon: <FaGamepad /> },
    { id: "mobile", icon: <FaMobileAlt /> },
  ];
  icons = icons || defaultIcons;

  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = windowWidth < 768;
  const iconSize = isSmallScreen ? 50 : 120;
  const textFontSize = isSmallScreen ? "0.9rem" : "1.1rem";

  // Pe mobil lărgim zona text ca să fie loc pentru iconițe
  const textHeight = isSmallScreen ? 12 * 16 : 10 * 16; // px

  // Arc calculation for desktop
  const rx = width / 2;
  const ry = height / 2;
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <div style={{ width: "100%", maxWidth: width, margin: "0 auto", position: "relative" }}>
      
      {/* Zona text explicativ - înălțime fixă */}
      <div
        style={{
          color: "white",
          fontSize: textFontSize,
          textAlign: "center",
          fontWeight: 600,
          padding: "1.4rem 1rem",
          height: `${textHeight}px`,
          backgroundColor:'rgba(0,0,0,0.7)',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius:'2rem'
        }}
      >
        {selectedPlatform
          ? controlTexts[selectedPlatform].map((text, idx) => (
              <div key={idx} style={{ marginBottom: "0.3rem" }}>{text}</div>
            ))
          : "Click on a platform icon below to see control descriptions"}
      </div>

      {isSmallScreen ? (
        // Mobile layout: iconițe sub zona text
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            marginTop: "5rem", // mai mult spațiu sub text
          }}
        >
          {icons.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPlatform(item.id)}
              style={{
                cursor: "pointer",
                width: iconSize,
                height: iconSize,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: selectedPlatform === item.id ? "goldenrod" : "white",
                background: "rgba(0,0,0,0.9)",
                borderRadius: "0.5rem",
                transition: "transform 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {item.icon}
            </div>
          ))}
        </div>
      ) : (
        // Desktop layout: iconițe pe arc
        <div
          style={{
            position: "relative",
            width,
            height,
            transformStyle: "preserve-3d",
            marginTop: "-60px", // ridică iconițele peste zona text
          }}
        >
          {/* SVG Arc */}
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            style={{ overflow: "visible" }}
          >
            <path
              d={`
                M ${centerX - rx} ${centerY} 
                A ${rx} ${ry} 0 0 0 ${centerX + rx} ${centerY}
              `}
              fill="none"
              stroke="rgba(255,255,255,1)"
              strokeWidth="20"
              style={{ filter: "blur(20px)" }}
            />
          </svg>

          {/* Iconițe pe arc */}
          {icons.map((item, i) => {
            const angle = Math.PI - (i * Math.PI) / (icons.length - 1);
            const x = centerX + rx * Math.cos(angle);
            const y = centerY + ry * Math.sin(angle);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedPlatform(item.id)}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  transform: "translate(-50%, -50%)",
                  cursor: "pointer",
                  color: selectedPlatform === item.id ? "gold" : "white",
                  backgroundColor: "rgba(0,0,0,0.9)",
                  borderRadius: "0.5rem",
                  filter: "drop-shadow(0 0 20px white)",
                  transition: "transform 0.2s, color 0.2s",
                  zIndex: 2,
                  width: iconSize,
                  height: iconSize,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: iconSize / 2,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translate(-50%, -50%) scale(1.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform =
                    "translate(-50%, -50%) scale(1)")
                }
              >
                {item.icon}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
