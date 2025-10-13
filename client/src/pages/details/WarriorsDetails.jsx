import { useEffect, useState } from "react";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const texture = '/pics/texture2.webp';
const stripe = '/pics/banners/paint-stripe.png';
const marker = '/pics/banners/paint-marker.png';


export default function Warriors(){

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
                    <img src='/pics/banners/warrior-blazon.webp' alt='Left Blazon' style={{height:'100%'}}/>
                    <div style={{position:'absolute',left:'50%',transform:'translateX(-50%)',fontSize:'5rem',color:'white',fontWeight:'900',pointerEvents:'none'}}>Warriors</div>
                    <img src='/pics/banners/warrior-blazon.webp' alt='Right Blazon' style={{height:'100%'}}/>
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
                    <Link className="champions-category-label" to={"/rogues"}>Rogues</Link>
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
                        Warriors are the backbone of any battle, towering figures who charge into the fray with unwavering courage. 
                        Clad in heavy armor that gleams under the sun and wielding shields that protect their allies, they face danger head-on, unflinching.
                        Every strike of their sword, axe, or hammer is precise and purposeful, each movement honed through countless battles and relentless training.
                    </div>
                </div>

                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                        Not all warriors are the same. Some are disciplined knights, bound by codes of honor and chivalry, 
                        fighting for justice and the protection of the innocent. Others are fierce berserkers, driven by raw fury and the thrill 
                        of combat, leaving devastation in their wake. Yet, whether calm and calculating or wild and unstoppable, 
                        all warriors share an unyielding bravery, a loyalty to their comrades, and a relentless desire to dominate the battlefield.
                    </div>
                </div>
                 
                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                            Outside the chaos of war, warriors are natural leaders and steadfast guardians.
                            Legends speak of warriors who held entire fortresses against overwhelming odds, or who carried their companions through dire circumstances 
                            when hope seemed lost. Even the most aggressive among them adhere to an unspoken code: every blow they strike and every foe they defeat is 
                            a reflection of their discipline, skill, and enduring spirit. 
                            Their presence inspires courage, their resilience commands respect, and their mastery of combat makes them an indispensable force in any fight.
                    </div>
                </div>

                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                           Their fighting style is straightforward yet versatile. Warriors excel in close-quarters combat, where their heavy strikes and relentless 
                           pressure can overwhelm even the toughest of foes. Many rely on brute strength and physical endurance, using swords, axes, and hammers to carve through 
                           enemy lines, while others wield shields to block blows and protect their allies. They are experts at charging into battle, 
                           breaking enemy formations with unstoppable momentum, and drawing the enemy’s focus onto themselves through sheer presence and intimidation.
                    </div>
                </div>

                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', display:"flex", flexDirection:"column", textAlign:"left", justifyContent:"center"}}>
                        <b>Durability: unmatched resilience, able to withstand punishment others cannot.</b>
                        <b>Melee Mastery: devastating damage in close combat, thriving in<br/> prolonged duels.</b>
                        <b>Initiation: the first to leap into battle, forcing enemies to react.</b>
                        <b>Leadership: natural protectors, inspiring courage in allies and fear in foes.</b>
                    </div>
                </div>


            </div>
            <Footer/>
        </div>
    )
}