import { useEffect, useState } from "react";


const arenaWide = '/pics/arenas/arena-glow.webp';
const world = '/pics/worlds/bubble-world.webp';
export default function PlanYourStrategy(){
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return() => window.removeEventListener("resize", handleResize);
    },[]);
    
    const isNarrow = windowWidth < 1280;
    const containerH = isNarrow ? "auto" : "80rem";
    const paddingH = isNarrow ? "2rem" : "5rem";
    const paddingV = "2rem";
    const titleFont = isNarrow ? "3rem" : "5rem";
    const sectionFont = isNarrow ? "1.5rem" : "2rem";
    const gapSections = "2rem";
    const overlayH   = isNarrow ? "100%" : containerH;

    return(
        <div style={{fontFamily:'Medieval Sharp' ,position:"relative",width:"100%",minHeight:containerH}}>
            <img src={world} alt="fantasy realm" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
            <div style={{position:"relative",width:"100%", minHeight:overlayH,background:"rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"#fff",padding:`${paddingV} ${paddingH}`,gap:gapSections,boxSizing:"border-box",fontSize:sectionFont}}>
                <div style={{gap:'0.5rem', display:"flex", flexDirection:'column', fontWeight:'bold'}}>
                    <label>Countless ways await you, champion. Whether solo or in a team, every match type offers unique chances to strike — or create your own. </label>
                    <label><b>Choose your Champion</b>, equip your weapons and abilities, and adapt your playstyle. Burn through enemies with raw power, stalk them with precision, or split roles wisely for coordinated assaults. </label>
                    <label>Never forget defense — predicting and countering your enemy can turn their attack into your deadliest strike. </label>
                    <label>Your style is forged by the map, your team size, the match type, and the hero you shape. </label>
                    <label>Let’s break them down in detail...</label>
                </div>
                <ConstructInArena w={'100%'} h={'100%'} f={'flex'} fd={"row-reverse"}/>
                <ConstructInDungeon w={'100%'} h={'100%'} f={'flex'} fd={"row"}/>
            </div>
            <div style={{position:"absolute",inset:"0 auto auto 0",width:"100%",height:"10%",background:"linear-gradient(to bottom,#1c1c1c,transparent)",pointerEvents:"none"}}/>
            <div style={{position:"absolute",inset:"auto auto 0 0",width:"100%",height:"10%",background:"linear-gradient(to top,#1c1c1c,transparent)",pointerEvents:"none"}}/>
        </div>
    );
}

const ConstructInArena = ({w,h,f,fd}) => (
  <div style={{width:w,height:h,display:f,flexDirection:fd,gap:"1.5rem",alignItems:"center",justifyContent:"center"}}>
    <div style={{maxWidth:"60%",textAlign:"justify",fontSize:"1.8rem" , display:"flex", flexFlow:"column wrap"}}>
        <label style={{fontWeight:'900', fontStyle:"underline"}}>ARENA</label>
        <label>Following the main corridors throws you straight into chaotic brawls where everyone clashes head-on. If you want faster action and direct confrontation, that’s where the real grind happens.</label>
        <label>But… you can also take designated shortcut zones to outflank your opponents or sneak through hidden passages. These risky routes can save time, let you avoid crowded fights, and even give you the chance to strike from behind.</label>
        <label>Wether you fight through the main battlefield or weave through back-alleys, your strategy decides if you rise or fall.</label>
    </div>
    <img src={arenaWide} style={{width:"40%",height:"auto",objectFit:"cover",borderRadius:"1rem",boxShadow:"0 0 15px rgba(0,0,0,0.6)"}}/>
  </div>
)


const ConstructInDungeon = ({w,h,f,fd}) => (
  <div style={{width:w,height:h,display:f,flexDirection:fd,gap:"1.5rem",alignItems:"stretch",justifyContent:"center"}}>
    <div style={{flex:1,textAlign:"justify",fontSize:"1.8rem",display:"flex",flexFlow:"column wrap",gap:"0.5rem"}}>
      <label style={{fontWeight:'900',textDecoration:"underline"}}>DUNGEON RAIDS</label>
      <label>Team up to defeat legendary bosses and other players. 
        Venture into dark dungeons with your party, overcome powerful NPCs and rival players, and gather as many chests and epic loot as possible.</label>
      <label>Strategy, coordination, and timing are key to conquering each raid and claiming your rewards.</label>
    </div>
    <img src={arenaWide} style={{width:"40%",height:"auto",objectFit:"cover",borderRadius:"1rem",boxShadow:"0 0 15px rgba(0,0,0,0.6)"}}/>
  </div>
)