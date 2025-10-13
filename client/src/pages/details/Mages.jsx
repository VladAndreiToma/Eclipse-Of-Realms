import { useEffect, useState } from "react";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const texture = '/pics/texture2.webp';
const stripe = '/pics/banners/paint-stripe.png';
const marker = '/pics/banners/paint-marker.png';


export default function Mages(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const handleResize = () =>  setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return() => window.removeEventListener("resize", handleResize);
    },[]);

    let isNarrow = windowWidth < 1280;  // cam 80 rem si dam rescale in functie de asta

    return(
        <div className="page">
            <NavBar/>
            <div style={{width:'100%', fontFamily:'Cinzel', fontSize: isNarrow?'4rem' : '2.5rem', minHeight:'100vh', display:"flex", flexDirection:'column',gap:'1rem', backgroundImage:`url(${texture})`, backgroundSize:'cover', backgroundRepeat:"no-repeat", backgroundPosition:"center", padding:'2rem'}}>
                <div style={{width:'100%',height:'30vh',background:`url(${stripe})`,position:'relative',backgroundSize:'contain',backgroundPosition:'center',backgroundRepeat:'no-repeat',display:'flex',alignItems:'center', justifyContent:"space-around",padding:'0 2rem'}}>
                    <img src='/pics/banners/mage-blazon.webp' alt='Left Blazon' style={{height:'100%'}}/>
                    <div style={{position:'absolute',left:'50%',transform:'translateX(-50%)',fontSize:'5rem',color:'white',fontWeight:'900',pointerEvents:'none'}}>Mages</div>
                    <img src='/pics/banners/mage-blazon.webp' alt='Right Blazon' style={{height:'100%'}}/>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateRows: 'repeat(2, 1fr)', // 2 rânduri egale
                        gridAutoFlow: 'column',             // umple coloanele înainte să treacă la următorul rând
                        rowGap: '1rem',
                        columnGap:'2rem',
                        justifyContent:"center", alignItems:"center", fontWeight:'900',
                        width: '100%',
                        height: 'auto',
                    }}
                >
                    <Link className="champions-category-label" to={"/warriors"}>Warriors</Link>
                    <Link className="champions-category-label" to={"/rogues"}>Rogues</Link>
                    <Link className="champions-category-label" to={"/beasts"}>Beasts</Link>
                    <Link className="champions-category-label" to={"/marksmen"}>Marksmen</Link>
                    <Link className="champions-category-label" to={"/tanks"}>Tanks</Link>
                    <Link className="champions-category-label" to={"/fiends"}>Fiends</Link>
                    <Link className="champions-category-label" to={"/supporters"}>Supporters</Link>
                </div>
                
                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                        Mages are the living conduits of arcane power, scholars of the unseen forces that shape the world. Where a warrior’s strength fades and a rogue’s blade grows dull, a mage’s mastery only deepens with time and knowledge. Entire kingdoms rise and fall on their spells, and history remembers the names of great mages as both saviors and destroyers. In battle, they are beacons of raw energy, weaving fire, frost, and lightning into weapons that defy imagination.
                    </div>
                </div>

                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                        Their fighting style relies on distance, control, and overwhelming magical force. Mages rarely survive in the thick of melee, but from afar they dictate the pace of combat — raining destruction, bending the battlefield to their will, and dismantling enemies with relentless precision. Their bodies are fragile, but their minds are fortresses of knowledge and their magic can turn the tide of a war.
                    </div>
                </div>
                 
                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                            To face a mage is to battle the impossible: flames that consume, frost that freezes blood, and bolts of lightning faster than thought. They embody knowledge turned into power, wisdom turned into destruction, and imagination unleashed upon the battlefield. Where others rely on steel or stealth, the mage bends reality itself.
                    </div>
                </div>

                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                           Elemental Spells: fireballs, frost bolts, and storms that devastate groups of enemies.

Area of Effect Magic: burning fields, frozen zones, or arcane explosions that control entire battle spaces.

Crowd Control: roots, slows, and stuns to halt enemy advances and protect allies.

Defensive Wards & Teleports: fragile though they may be, mages can shield themselves, blink across the field, or even bend time to survive.
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}