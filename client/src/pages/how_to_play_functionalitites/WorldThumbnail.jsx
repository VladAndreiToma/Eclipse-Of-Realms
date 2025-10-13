const Pyrothar = '/pics/worlds/Pyrothar.webp';
const Frostmere = '/pics/worlds/Frostmere.webp';
const Noctryll = '/pics/worlds/Noctryll.webp';
import { useState, useEffect } from "react";

export default function WorldThumbnail({worldName}){
    const realmLandscape = 
  worldName === 'Pyrothar' 
    ? Pyrothar 
    : worldName === "Frostmere" ? Frostmere : Noctryll;

    // o fac responsive
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
        useEffect(() => {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
    const isNarrow = windowWidth < 1280; // sub 80rem
    const width = isNarrow ? '14rem' : '21rem';
    const height = isNarrow ? '14rem' : '21rem';
    
    return(
        <div style={{position:"relative", width:width, height:height, borderRadius:'5rem', border: `5px solid ${worldName === 'Pyrothar' ? 'red' : (worldName === 'Frostmere' ? 'blue' : 'black')}`}}>
            <img src={realmLandscape} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'4.9rem'}}/>
            <div style={{position:"absolute", width:'100%', height:'100%', background:'rgba(0,0,0,0.2)', top:0, left:0, fontSize:'2rem', display:"flex", borderRadius:'5rem', justifyContent:"center" ,alignItems:"center"}}>
                <label>{worldName}</label>
            </div>
        </div>
    )
}