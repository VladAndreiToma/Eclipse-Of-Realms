//this is to explain to the player how to use the controls for differnt platforms
//make special attacks combos and so on, game is available in mobile version pc and console
import { useState, useEffect } from "react";
import Platforms from "./Platforms";
const gamingPortal = '/pics/banners/gaming-portal.webp';
export default function CombatSystem(){
    // facem portalu scalabil si responsive vizual
    const[windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isNarrow = windowWidth < 1280; // approx 80 rem
    const containerH = isNarrow ? "auto": "76rem";
    const paddingH = isNarrow ? "1rem" : "2rem";
    const paddingV = "1.5rem";
    const titleFont = isNarrow ? "3rem" : "5rem";
    const sectionFont = isNarrow ? "1.3rem" : "1.7rem";
    const gapSections = "2rem";
    return(
  <div style={{position:"relative", width:"100vw", minHeight:containerH, overflow:"hidden",background:`url(${gamingPortal}) center/cover`}}>
    <div style={{position:"relative", minHeight:containerH, display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center", textAlign:"center",
      padding:`${paddingV} ${paddingH}`, gap:gapSections, boxSizing:"border-box", fontSize:sectionFont, color:"white", fontFamily:"Marcellus SC"}}>
      <label style={{fontFamily: 'Cinzel Decorative', fontWeight:'900', fontSize: titleFont}}>Combat Systems</label>
        <span style={{display:"flex",flexFlow:"column wrap"}}>
          <b className="gameplay-mini-title">Visual Indicators</b>
          <label>Your champion health/armor/ability chargebar.<br/>Enemy's healt/armor/ability chargebar.<br/>Combat visual effects, damage visual effects</label>
        </span>
        <span style={{display:"flex", flexFlow:"column wrap"}}>
          <b className="gameplay-mini-title">Effects</b> 
          <label>Visuals for damage taken or inflited, sounds for taken or inflicted damage,<br/>haptic effects of buzzing on console</label>
        </span>
        <label style={{color:"gold", fontWeight:'900'}}>Certain combinations of controls might trigger special attacks or abilities.<br/>You can switch between 2 types of weapon, priamry and secondary</label>
        <div style={{width:'50%', height:'100%', display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Platforms/>
        </div>
    </div>
  </div>
);

}