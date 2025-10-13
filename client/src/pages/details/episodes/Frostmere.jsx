import NavBar from "../../../components/navigation/NavBar";
import Footer from "../../Footer";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterPreBanner from "../../../FooterPreBanner";

const banner = '/pics/worlds/Frostmere/frostmere-bottomless-lake.jpg';
const landmarks = [
  { pictureName:'frostmere-big-mountain.webp', name:'ShiverFrost Summit' },
  { pictureName:'frostmere-citadel.webp', name:'Mrinavjorn' },
  { pictureName:'frostmere-eternal-cave.webp', name:'Crystal Hollow' },
  { pictureName:'frostmere-ice-arena.webp', name:'Permafrost Pit' },
  { pictureName:'frostmere-rift.webp', name:'Glacier Tear' }
];

export default function Frostmere() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => { 
    const handleResize = () => setWindowWidth(window.innerWidth); 
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  const isNarrow = windowWidth < 1280;
  const baseImageSize = isNarrow ? '15rem' : '25rem';
  const textFontSize = isNarrow ? '1rem' : '1.5rem';
  const paddingMain = isNarrow ? '1rem 2%' : '2rem 5rem';
  const gapContent = isNarrow ? '2rem' : '10rem';

  const mainContainerStyle = { 
    minHeight:'100vh', 
    width:'100vw', 
    display:'flex', 
    flexDirection:'column', 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundImage:`url(${banner})`, 
    backgroundSize:'cover', 
    backgroundPosition:'center', 
    padding:paddingMain, 
    boxSizing:'border-box', 
    color:'white', 
    position:'relative'
  };

  const overlayStyle = { 
    position:'absolute', top:0,left:0,right:0,bottom:0, 
    background:'rgba(0,0,0,0.5)', zIndex:1
  };

  const contentRowStyle = { 
    display:'flex', flexDirection: isNarrow ? 'column' : 'row',
    alignItems:'center', justifyContent:'center', width:'100%',
    gap:gapContent, zIndex:2
  };

  const textColumnStyle = { 
    width:isNarrow?'90%':'38%', maxWidth:'800px',
    fontFamily:"Goudy Bookletter 1911", fontSize:textFontSize, lineHeight:1.5
  };

  const imagePileBaseStyle = { 
    position:'absolute', width:baseImageSize, height:baseImageSize, objectFit:'cover', 
    borderRadius:'1rem', boxShadow:'0 8px 24px rgba(0,0,0,0.6)', 
    transition:'transform 0.3s ease, z-index 0s, box-shadow 0.3s ease, filter 0.3s ease', 
    cursor:'pointer'
  };

  const images = [
    { top:'-28%', left:'0%', transform:'rotate(-10deg) translate(-20%,10%)', z:1 },
    { top:'-10%', left:'15%', transform:'rotate(5deg)', z:2 },
    { top:'-5%', left:'40%', transform:'rotate(15deg) translate(5%,-5%)', z:3 },
    { top:'15%', left:'-10%', transform:'rotate(-20deg)', z:4 },
    { top:'20%', left:'25%', transform:'rotate(10deg)', z:5 }
  ];

  const hoverStyle = { 
    zIndex:10, transform:'scale(1.1)', filter:'brightness(1.05) contrast(1.05)'
  };

  const resetStyles = (e, originalTransform, originalZIndex) => { 
    e.currentTarget.style.zIndex=originalZIndex; 
    e.currentTarget.style.transform=originalTransform; 
    e.currentTarget.style.filter='none'; 
  };

  return (
    <div className="page">
      <NavBar style={{ zIndex: 2 }}/>
      <div style={mainContainerStyle}>
        <div style={overlayStyle}></div>
        <div style={contentRowStyle}>
          <div style={textColumnStyle}>
            <h1>Welcome to Frostmere</h1>
            <p>
              Frostmere is a land of eternal winter, where icy winds carve
              through ancient mountains and frozen lakes hide secrets beneath
              their glassy surfaces. Glaciers shift and groan, shaping the land
              in silence.
            </p>
            <p>
              Legends tell of Frostmere’s guardians, beings forged of ice and
              snow, dwelling within caverns deep below the permafrost.
            </p>
          </div>

          <div 
            style={{
              flex:1, minWidth:baseImageSize, position:'relative', height:baseImageSize, 
              display:'flex', justifyContent:'center', alignItems:'center'
            }}
          >
            {images.map((img,i)=>(
              <img 
                key={i} 
                src={'/pics/worlds/Frostmere/'+landmarks[i].pictureName} 
                alt={landmarks[i].name}
                style={{
                  ...imagePileBaseStyle, top:img.top, left:img.left, transform:img.transform, zIndex:img.z
                }} 
                onMouseEnter={e=>{
                  e.currentTarget.style.zIndex=hoverStyle.zIndex; 
                  e.currentTarget.style.transform=`${img.transform} ${hoverStyle.transform}`;
                  e.currentTarget.style.filter=hoverStyle.filter;
                }}
                onMouseLeave={e=>resetStyles(e,img.transform,img.z)}
                onClick={()=>navigate(`/discover/episodes-of-realms/frostmere/${landmarks[i].name.toLowerCase().replace(/\s+/g,'-')}`)}
              />
            ))}
          </div>
        </div>
      </div>
      <FooterPreBanner/>
      <Footer/>
    </div>
  );
}
