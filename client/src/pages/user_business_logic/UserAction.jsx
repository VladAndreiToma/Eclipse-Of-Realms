import { Link } from "react-router-dom";
const banner = '/pics/banners/futuristic-game-hall.webp';

export default function UserAction() {
  const actions = [
    {label:"ALREADY PART OF OUR STORIES?", to:"/login", btnText:"Login Into Your Account"},
    {label:"YOU WANT TO JOIN THE REALMS?", to:"/register", btnText:"Create Your Account"}
  ];

  const linkStyle = {
    padding:"1rem 2rem",
    background:"linear-gradient(145deg,#b68634,#f0d07c)",
    color:"#fff",
    fontSize:"2rem",
    fontWeight:"bold",
    textDecoration:"none",
    boxShadow:"0 4px 10px rgba(0,0,0,0.5)",
    transition:"transform 0.2s",
    fontFamily:"Cormorant Garamond"
  };

  return (
    <div style={{position:"absolute",top:0,left:0,width:"100vw",height:"100vh",background:`url(${banner}) center/cover no-repeat`,display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontFamily:"Cormorant Garamond"}}>
      <div style={{position:"absolute",inset:0,backgroundColor:"rgba(0,0,0,0.6)"}}/>
      <div style={{display:"flex",flexDirection:"row",gap:"4rem",zIndex:1,alignItems:"center"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"}}>
          <label style={{fontSize:"2.5rem"}}>{actions[0].label}</label>
          <Link to={actions[0].to} style={linkStyle} onMouseOver={e=>e.currentTarget.style.transform="scale(1.05)"} onMouseOut={e=>e.currentTarget.style.transform="scale(1)"}>{actions[0].btnText}</Link>
        </div>
        <div style={{
  width: "4px",
  height: "70vh",
  background: "linear-gradient(to bottom, #ff3399, #ffffff, #ff3399)",
  boxShadow: "0 0 25px #ff66cc, 0 0 50px #ff66cc",
  alignSelf: "center",
  animation: "pulse 2s infinite"
}}/>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"}}>
          <label style={{fontSize:"2.5rem"}}>{actions[1].label}</label>
          <Link to={actions[1].to} style={linkStyle} onMouseOver={e=>e.currentTarget.style.transform="scale(1.05)"} onMouseOut={e=>e.currentTarget.style.transform="scale(1)"}>{actions[1].btnText}</Link>
        </div>
      </div>
    </div>
  )
}
