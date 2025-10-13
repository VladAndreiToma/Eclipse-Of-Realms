import { useEffect, useState } from "react";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const texture = '/pics/texture2.webp';
const stripe = '/pics/banners/paint-stripe.png';
const marker = '/pics/banners/paint-marker.png';


export default function Beasts(){

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
                    <img src='/pics/banners/beast-blazon.webp' alt='Left Blazon' style={{height:'100%'}}/>
                    <div style={{position:'absolute',left:'50%',transform:'translateX(-50%)',fontSize:'5rem',color:'white',fontWeight:'900',pointerEvents:'none'}}>Beasts</div>
                    <img src='/pics/banners/beast-blazon.webp' alt='Right Blazon' style={{height:'100%'}}/>
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
                    <Link className="champions-category-label" to={"/mages"}>Rogues</Link>
                    <Link className="champions-category-label" to={"/mages"}>Mages</Link>
                    <Link className="champions-category-label" to={"/marksmen"}>Marksmen</Link>
                    <Link className="champions-category-label" to={"/tanks"}>Tanks</Link>
                    <Link className="champions-category-label" to={"/fiends"}>Fiends</Link>
                    <Link className="champions-category-label" to={"/supporters"}>Supporters</Link>
                </div>
                
                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                        Beasts are the raw, untamed power of the wild made flesh. They are not bound by the laws of kings or cities, but by the ancient rhythm of fang, claw, and survival. Some stride into battle as towering animalistic warriors, others fight alongside loyal companions called from the wilderness — wolves, hawks, or monstrous predators born of myth. To face a Beast is to confront the primal fury of nature itself, wild and unrelenting.
                    </div>
                </div>

                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                        Their fighting style is a mix of ferocity, instinct, and adaptability. Unlike the disciplined strikes of warriors or the careful planning of rogues, Beasts fight with overwhelming aggression and relentless pursuit. They thrive in motion, closing gaps quickly, tearing into their prey with brute force, or commanding creatures that mirror their own savagery. Their connection to nature grants them resilience, heightened senses, and the ability to turn the battlefield into their hunting ground.
                    </div>
                </div>
                 
                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                           Beasts are more than warriors; they are predators, hunters, and guardians of the untamed. They embody the balance of nature’s wrath and protection, feared for their savagery and respected for their bond with the natural world. Where others see chaos, the Beast sees harmony — the eternal law of hunter and prey.
                    </div>
                </div>

                <div style={{width:'100%', minHeight:'60vh', background:`url(${marker})`, position:"relative", backgroundSize:'cover', backgroundPosition:"center", backgroundRepeat:"no-repeat"}}>
                    <div style={{position:"absolute", top:0, left:0, width:"100%", height:'100%', padding:'3rem 10rem', boxSizing:"border-box",
                        fontSize:'2rem', color:'white', fontFamily:'Marcellus SC', fontWeight:'100', display:"flex", justifyContent:"center", alignItems:"center"}}>
                            Companions & Summons: wolves, bears, or mythical beasts that fight alongside them.

Savage Strikes & Rending Claws: melee attacks that bleed and weaken foes.

Predator’s Instinct: heightened senses, tracking enemies, and striking from ambush.

Traps, Nets, and Snares: tools of the hunt that immobilize or cripple prey.

War Howls & Frenzy: empower themselves and allies with the fury of the wild.
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}