import { useState, useEffect } from "react";
import ConnectionDays from "./ConnectionDays";

const endlessCave = '/pics/worlds/coastal-landscape-fantasy-style.webp';
const chest = '/pics/miscs/daily-chest.webp';

export default function DailyRewards() {
    const [selectedDay, setSelectedDay] = useState(1);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isNarrow = windowWidth < 1280;
    const containerH = isNarrow ? "auto" : "70rem";
    const paddingH = isNarrow ? "2rem" : "5rem";
    const paddingV = "2rem";
    const titleFont = isNarrow ? "2rem" : "4rem";
    const sectionFont = isNarrow ? "1.3rem" : "1.7rem";
    const gapSections = "2rem";

    const rewards = [
        { one: "50 gold", two: "x2 XP" },
        { one: "10 gems", two: "1 chest" },
        { one: "100 gold", two: "small potion" },
        { one: "20 gems", two: "boost 1h" },
        { one: "150 gold", two: "x3 XP" },
        { one: "25 gems", two: "rare chest" },
        { one: "500 gold", two: "legendary key" },
    ];

    return (
        <div style={{position:"relative", width:"100%", minHeight:containerH}}>
            <img src={endlessCave} alt="fantasy realm" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover"}}/>

            <div style={{
                position:"relative",
                width:"100%",
                minHeight:"100%",
                background:"rgba(138, 43, 226, 0.7);",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
                textAlign:"center",
                color:"#fff",
                fontFamily:"Cormorant Garamond",
                padding:`${paddingV} ${paddingH}`,
                paddingTop: isNarrow ? "6rem" : paddingV, // ← mai mult padding sus pe ecrane mici
                paddingBottom: isNarrow ? "6rem" : "4rem", // ← aici adaugi padding jos
                gap:gapSections,
                boxSizing:"border-box",
                fontSize:sectionFont
            }}>
                <label style={{fontSize:sectionFont}}>Keep a playing strike every day to earn</label>
                <label style={{fontFamily:"Cinzel Decorative, cursive", fontWeight:900, fontSize:titleFont, margin:0}}>Daily Rewards</label>

                {/* Zilele / butoanele */}
                {/* Cuferele pentru ziua selectată */}
                <div style={{
                    display:"flex",
                    flexDirection: isNarrow ? "column" : "row",
                    gap:"1.5rem",
                    marginTop:"2rem",
                    alignItems:"center",
                    justifyContent:"center",
                    flexWrap:"wrap"
                }}>
                    {rewards[selectedDay-1] && ["one", "two"].map(key => (
                        <div style={{
                            position: "relative",
                            width: isNarrow ? "70vw" : "20rem",
                            height: isNarrow ? "40vw" : "25rem",
                            borderRadius: "3rem",
                            background: `url(${chest}) center/cover no-repeat`,
                            cursor: "pointer",
                            overflow: "hidden", // important ca overlay-ul să nu iasă
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                            }}>
                                <div style={{
                                    position: "absolute",
                                    inset: 0, // top:0; left:0; right:0; bottom:0
                                    background: "rgba(0,0,0,0.3)",
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontFamily: "Almendra SC",
                                    fontWeight: 900,
                                    fontSize: isNarrow ? "1.5rem" : "2rem",
                                    textAlign: "center",
                                    padding: "1rem"
                                }}>
                                    {rewards[selectedDay-1][key]}
                                </div>
                            </div>
                    ))}
                </div>
           
                <ConnectionDays 
                    onSelectedDay={(day)=>setSelectedDay(day)} 
                    selectedDay={selectedDay} 
                />

            </div>

            {/* Fade top/bottom */}
            <div style={{position:"absolute", inset:"0 auto auto 0", width:"100%", height:"10%", background:"linear-gradient(to bottom,#1c1c1c,transparent)", pointerEvents:"none"}}/>
            <div style={{position:"absolute", inset:"auto auto 0 0", width:"100%", height:"10%", background:"linear-gradient(to top,#1c1c1c,transparent)", pointerEvents:"none"}}/>
        </div>
    );
}
