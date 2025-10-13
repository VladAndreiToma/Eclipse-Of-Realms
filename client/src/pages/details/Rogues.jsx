import { useEffect, useState } from "react";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const texture = '/pics/texture2.webp';
const stripe = '/pics/banners/paint-stripe.png';
const marker = '/pics/banners/paint-marker.png';


export default function Rogues(){

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
                    <img src='/pics/banners/rogue-blazon.webp' alt='Left Blazon' style={{height:'100%'}}/>
                    <div style={{position:'absolute',left:'50%',transform:'translateX(-50%)',fontSize:'5rem',color:'white',fontWeight:'900',pointerEvents:'none'}}>Rogues</div>
                    <img src='/pics/banners/rogue-blazon.webp' alt='Right Blazon' style={{height:'100%'}}/>
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
                    <Link className="champions-category-label" to={"/mages"}>Mages</Link>
                    <Link className="champions-category-label" to={"/beasts"}>Beasts</Link>
                    <Link className="champions-category-label" to={"/marksmen"}>Marksmen</Link>
                    <Link className="champions-category-label" to={"/tanks"}>Tanks</Link>
                    <Link className="champions-category-label" to={"/fiends"}>Fiends</Link>
                    <Link className="champions-category-label" to={"/supporters"}>Supporters</Link>
                </div>
                
                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                        Rogues are the shadows that slip between the cracks of the battlefield, unseen until it’s far too late. Where warriors roar and mages dazzle, rogues whisper. They thrive in the silence of night, moving like ghosts through alleys and forests, always a step ahead of their prey. Legends speak of kings struck down in their courts, generals slain before a war began, or treasures stolen without a single guard knowing.
                    </div>
                </div>

                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                        Their fighting style is built on speed, precision, and deception. Rogues don’t rely on brute strength or overwhelming magic, but on cunning and skill. They strike from unexpected angles, using stealth to approach unseen and agility to vanish before a counterattack can land. Light armor makes them fragile compared to front-line fighters, but it grants them unmatched mobility — darting in and out of combat, leaving enemies bleeding and confused.
                    </div>
                </div>
                 
                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                            A rogue’s true weapon is not just their blade but their unpredictability. They are assassins, thieves, and spies — masters of subterfuge who turn secrecy itself into a weapon. Where others clash in open battle, rogues weave in silence, delivering the killing blow that changes the course of war.
                    </div>
                </div>

                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                           Stealth & Vanish: disappear into the shadows, reposition, or escape danger.

Backstab & Critical Strikes: deal devastating damage when striking unaware foes.

Poison & Bleeds: weaken enemies over time, turning even small wounds into lethal ones.

Traps, Smoke, and Decoys: disrupt the battlefield, control vision, and sow panic among opponents.
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}