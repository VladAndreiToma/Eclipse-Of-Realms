import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const texture = '/pics/texture2.webp';
const square = '/pics/banners/melting-square.webp';
const hero = '/pics/heroes/beast.webp';

export default function ChampionTableau() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isNarrow = windowWidth < 1280;
  const containerPadding = isNarrow ? "1rem 1rem" : "1rem 2rem";

  return (
    <div style={{width:"100%",minHeight:"50rem",display:"flex", justifyContent:"center",alignItems:"center",backgroundImage:`url(${texture})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",padding:containerPadding,boxSizing:"border-box",position:"relative"}}>
      <div style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(252,252,252,0.15)",zIndex:0}} />
      <div style={{position:"relative",zIndex:1,width:"100%",maxWidth:"100%",display:"flex",flexDirection:isNarrow?"column":"row",justifyContent:"flex-end",alignItems:"center",textAlign:"center",gap:'1rem', padding:containerPadding,boxSizing:"border-box"}}>
        
        <div style={{width:isNarrow?'100%':'50%', height:'100%', fontFamily:'Cinzel', position:"relative", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <label>Select your</label>
          <label style={{fontSize:'6rem', fontWeight:'900'}}>Champions!</label>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"center", gap:'2rem', padding:"1rem 0rem"}}>
            <button className="play-now-gold-enhanced" style={{maxWidth:"50rem"}} onClick={()=>navigate('/champions')}>More Champions</button>
            <button className="play-now-gold-enhanced" style={{backgroundColor:"#008bf6"}} onClick={()=>navigate('/login')}>Play Now</button>
          </div>
            <div style={{ display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)", // primul rând are 4 coloane
              gridAutoRows: "minmax(3rem, auto)",
              rowGap: "0.5rem",
              justifyItems: "center",
              fontSize: "1.8rem",
              fontWeight: "900", padding:'2rem 1rem'}}>
              <Link className="champions-category-label" to={"/warriors"}>Warriors</Link>
              <Link className="champions-category-label" to={"/rogues"}>Rogues</Link>
              <Link className="champions-category-label" to={"/mages"}>Mages</Link>
              <Link className="champions-category-label" to={"/beasts"}>Beasts</Link>
              <Link className="champions-category-label" to={"/marksmen"}>Marksmen</Link>
              <Link className="champions-category-label" to={"/tanks"}>Tanks</Link>
              <Link className="champions-category-label" to={"/fiends"}>Fiends</Link>
              <Link className="champions-category-label" to={"/supporters"}>Supporters</Link>
            </div>
        </div>
       

        {/* Card cu pătratul și eroul peste */}
        <div style={{position:"relative",width:isNarrow?"100%":"50%",height:isNarrow?"60rem":"50rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
          {/* pătratul */}
          <img src={square} alt="square" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}} />
          {/* eroul */}
          <img src={hero} alt="hero" style={{position:"relative",width:"80%",height:"80%",zIndex:2, objectFit:"contain", objectPosition:'top'}} />
        </div>

      </div>
    </div>
  );
}

