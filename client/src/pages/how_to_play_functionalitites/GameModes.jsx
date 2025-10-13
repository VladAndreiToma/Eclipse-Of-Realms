// describes the principal ways of play the game
/*  • PvP Arenas – lupte rapide între jucători
    • Realm Conquest – bătălii masive pentru controlul teritoriilor
    • Dungeon Raids – echipe împotriva monștrilor legendari
    • Fiecare mod prezentat cu o iconiță + descriere scurtă + imagine.
*/

import { useState, useEffect } from "react";
const fantasyRealm = '/pics/worlds/red-dungeon.webp';
export default function GameModes() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isNarrow = windowWidth < 1280;
  const containerH = isNarrow ? "auto" : "60rem";
  const paddingH = isNarrow ? "2rem" : "5rem";
  const paddingV = "3rem";
  const titleFont = isNarrow ? "3rem" : "5rem";
  const sectionFont = isNarrow ? "1.3rem" : "1.7rem";
  const gapSections = "2rem";

  const modes = [
    {title:"PVP Arenas", subtitle:"Fast-paced duels between players", desc:"Engage in quick matches, test your skills against real opponents, climb the rankings and earn rewards."},
    {title:"Realm Conquest", subtitle:"Massive battles for territory control", desc:"Join large-scale conflicts, capture key zones, coordinate with allies and dominate realm."},
    {title:"Dungeon Raids", subtitle:"Team up to defeat legendary bosses", desc:"Form parties, explore challenging dungeons, defeat powerful bosses and collect epic loot."},
    {title:"Relic Hunt", subtitle:"Steal and secure ancient relics", desc:"Locate hidden relics in enemy territory, avoid traps and return them to your base to claim victory."},
    {title:"Survival Waves", subtitle:"Endure endless waves of enemies", desc:"Test your endurance by facing consecutive waves of monsters, improve your strategy and survive as long as possible."}
  ];

  return (
    <div style={{position:"relative", width:"100vw", minHeight:containerH, overflowX:"hidden"}}>
      <img src={fantasyRealm} alt="fantasy realm" style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", objectFit:"cover", zIndex:0}}/>
      <div style={{position:"relative", width:"100%", minHeight:containerH, background:"rgba(0,0,0,0.5)", display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", padding:`${paddingV} ${paddingH}`, gap:gapSections, boxSizing:"border-box", zIndex:1}}>
        <label style={{fontFamily:"Cinzel Decorative, cursive", fontWeight:900, fontSize:titleFont, color:"white", margin:0}}>Game Modes</label>
        {modes.map((m,i)=>(
          <div key={i} style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem", width:"100%", color:"white", fontSize:sectionFont, wordBreak:"break-word", margin:0}}>
            <label style={{fontFamily:"Cinzel Decorative, cursive", fontWeight:900, margin:0, color:'gold'}}>{i+1}. {m.title}</label>
            <label style={{fontWeight:600, margin:0}}>{m.subtitle}</label>
            <label style={{margin:0}}>{m.desc}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
