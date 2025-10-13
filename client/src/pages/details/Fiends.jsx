import { useEffect, useState } from "react";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const texture = '/pics/texture2.webp';
const stripe = '/pics/banners/paint-stripe.png';
const marker = '/pics/banners/paint-marker.png';


export default function Fiends(){

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
                    <img src='/pics/banners/fiend-blazon.webp' alt='Left Blazon' style={{height:'100%'}}/>
                    <div style={{position:'absolute',left:'50%',transform:'translateX(-50%)',fontSize:'5rem',color:'white',fontWeight:'900',pointerEvents:'none'}}>Fiends</div>
                    <img src='/pics/banners/fiend-blazon.webp' alt='Right Blazon' style={{height:'100%'}}/>
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
                    <Link className="champions-category-label" to={"/mages"}>Mages</Link>
                    <Link className="champions-category-label" to={"/beasts"}>Beasts</Link>
                    <Link className="champions-category-label" to={"/marksmen"}>Marksmen</Link>
                    <Link className="champions-category-label" to={"/tanks"}>Tanks</Link>
                    <Link className="champions-category-label" to={"/supporters"}>Supporters</Link>
                </div>
                
                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                        Born from shadows and corruption, the Fiends are creatures of chaos and torment. Once human, beast, or spirit, they were twisted by 
                        dark forces into monstrosities driven by hunger, cruelty, and power. Legends speak of them as nightmares given flesh, 
                        feeding on fear and despair to grow stronger. Some serve dark masters, while others wander freely, leaving ruin in their wake.
                    </div>
                </div>

                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                        Fiends embody horror and dread. Their forms vary—clawed abominations, horned demons, or shadow-wreathed horrors—but all share a terrifying aura. 
                        They are unpredictable, unholy, and relentless, often combining brute savagery with dark magic.
                    </div>
                </div>
                 
                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                           Fiends are the embodiment of nightmare—unstoppable predators that fight with both claw and curse, feared by all who cross their path.
                    </div>
                </div>

                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                        Corruption Aura – Weakens nearby enemies, sapping their strength.

Dark Regeneration – Feeds on pain or blood to restore vitality.

Fearmonger – Strikes terror into foes, breaking their focus.

Hellfire / Shadowstrike – Attacks infused with infernal or shadow energy.

Unholy Resilience – Resistant to conventional weapons, thriving in darkness.
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}