import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const realms = '/pics/realms.webp';
const emblem = "/pics/banners/eor-banner.webp";

export default function RealmWorldActs() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => { const handleResize = () => setWindowWidth(window.innerWidth); window.addEventListener('resize', handleResize); return () => window.removeEventListener('resize', handleResize); }, []);
  const isNarrow = windowWidth < 1280;
  const titleFont = isNarrow ? '2.5rem' : '4rem';
  const descFont = isNarrow ? '1.8rem' : '3rem';
  const containerMinH = isNarrow ? 'fit-content' : '40rem';

  return (
    <div style={{position:"relative",width:"100%",minHeight:containerMinH,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundImage:`url(${realms})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",boxSizing:"border-box",padding:isNarrow?"2rem 1.5rem":"0 3rem"}}>
      <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.2)",zIndex:1}} />
      

      {[
        { top: "1rem", left: "1rem" },      // stânga sus
        { top: "1rem", right: "1rem" },     // dreapta sus
        { bottom: "1rem", left: "1rem" },   // stânga jos
        { bottom: "1rem", right: "1rem" }   // dreapta jos
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...pos,
            zIndex: 0,
            opacity: 0.6, // mai transparent, ca watermark
            pointerEvents: "none"
          }}
        >
          <img
            src={emblem}
            alt="Game Emblem"
            style={{ width: "10rem", height: "auto" }}
          />
        </div>
      ))}


      <div style={{position:"relative",zIndex:2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",gap:"1rem",width:"100%"}}>
        <label style={{fontSize:titleFont,fontFamily:"Marcellus SC",fontWeight:700,display:"block",color:"white"}}>Explore the Realm in 3 Seasons</label>
        <label style={{fontSize:descFont,fontFamily:"Marcellus SC",maxWidth:isNarrow?"90%":"70rem",lineHeight:1.6,color:"white"}}>Journey through three breathtaking worlds, each filled with unique challenges, mysteries, and adventures.</label>
        <Link className="play-now-gold-enhanced" style={{textDecoration:"none"}} to="/episodes-of-realms">Explore Now</Link>
      </div>
    </div>
  );
}
