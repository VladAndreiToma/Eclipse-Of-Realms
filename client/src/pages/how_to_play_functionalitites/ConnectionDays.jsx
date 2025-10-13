import React, { useState, useEffect } from "react";

export default function ConnectionDays({ onSelectedDay, selectedDay }) {
  const [highlightedDay, setHighlightedDay] = useState(selectedDay || 1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isNarrow = windowWidth < 1280;
  const boxSize = isNarrow ? 48 : 92;
  const connectorWidth = isNarrow ? 16 : 44;

  const days = [1, 2, 3, 4, 5, 6, 7];
  const activeGradient = "linear-gradient(180deg,#d4b86a,#8b5a2b)";

  // Grupăm zilele pe rânduri pentru mobil
  const rows = isNarrow ? [[1,2,3],[4,5],[6,7]] : [days];

  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:12, marginTop:30 }}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:12, flexWrap:"wrap" }}>
          {row.map((day, i) => (
            <React.Fragment key={day}>
              <button
                onClick={() => {
                  setHighlightedDay(day);
                  onSelectedDay?.(day);
                }}
                style={{
                  width: boxSize,
                  height: boxSize,
                  borderRadius: 12,
                  border: highlightedDay===day?"transparent":"3px solid #7a7a7a",
                  background: highlightedDay===day?activeGradient:"#111",
                  color: highlightedDay===day?"#2f1a0a":"#cfcfcf",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  fontFamily:"'Cinzel Decorative', cursive, serif",
                  cursor:"pointer",
                  fontWeight:800,
                  fontSize:isNarrow?16:24,
                  boxShadow:highlightedDay===day?"0 6px 18px rgba(139,90,43,0.35)":"none",
                  transition:"transform .14s ease, box-shadow .14s ease",
                }}
                onMouseEnter={e=>e.currentTarget.style.transform="translateY(-4px)"}
                onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}
              >
                {day}
              </button>

              {!isNarrow && i<row.length-1 && (
                <div
                  style={{
                    width: connectorWidth,
                    height: 6,
                    borderRadius: 6,
                    background: i< (highlightedDay?highlightedDay-1:0)?activeGradient:"#555",
                    boxShadow: i< (highlightedDay?highlightedDay-1:0)?"0 4px 10px rgba(139,90,43,0.25)":"none",
                    transition:"background .18s ease, box-shadow .18s ease",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      ))}

      {/* Gradient bottom bar doar pe desktop */}
      {!isNarrow && (
        <div
          style={{
            marginTop: 12,
            width: `calc(${days.length*boxSize}px + ${(days.length-1)*connectorWidth}px)`,
            height: 6,
            borderRadius: 3,
            background:"linear-gradient(90deg,#d4b86a,#8b5a2b,#d4b86a)"
          }}
        />
      )}
    </div>
  );
}
