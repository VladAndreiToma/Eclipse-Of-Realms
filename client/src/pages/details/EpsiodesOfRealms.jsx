import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../Footer";
import FooterPreBanner from "../../FooterPreBanner";

const Pyrothar = '/pics/worlds/Pyrothar.webp';
const Frostmere = '/pics/worlds/Frostmere/Frostmere.webp';
const Noctryll = '/pics/worlds/Noctryll.webp';

export default function EpisodesOfRealms() {
    const worlds = [
        {name: 'Pyrothar', img: Pyrothar},
        {name: 'Frostmere', img: Frostmere},
        {name: 'Noctryll', img: Noctryll},
    ];

    const [isColumn, setIsColumn] = useState(window.innerWidth < 1280);

    useEffect(() => {
        const handleResize = () => setIsColumn(window.innerWidth < 1280);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let displayHeight = isColumn ? '300vh' : '100vh';

    return (
        <div className="page">
            <NavBar/>
            <div style={{
                width:'100%',
                height:displayHeight,
                display:"flex",
                flexDirection: isColumn ? "column" : "row",
                justifyContent:"center",
                alignItems:"center"
            }}>
                {worlds.map(world => (
                    <div key={world.name} style={{
                        width: isColumn ? '100%' : '100%',
                        height: isColumn ? '100%' : '100%',
                        position:'relative',
                        background:`url(${world.img})`,
                        backgroundRepeat:"no-repeat",
                        backgroundSize:'cover',
                        backgroundPosition:"center"
                    }}>
                        {/* overlay */}
                        <div style={{
                            position:'absolute',
                            top:0,
                            left:0,
                            width:'100%',
                            height:'100%',
                            background:'rgba(0,0,0,0.2)',
                            display:'flex',
                            flexDirection:"column",
                            justifyContent:'center',
                            alignItems:'center',
                            color:'white',
                            fontSize:'3rem',
                            fontWeight:'bold',
                            fontFamily:'Cinzel'
                        }}>
                            {world.name}
                            <Link className="play-now-gold-enhanced" to={`/discover/episodes-of-realms/${world.name.toLowerCase()}`} style={{textDecoration:'none'}}>Details</Link>
                        </div>
                    </div>
                ))}
            </div>
            <FooterPreBanner/>
            <Footer/>
        </div>
    );
}
