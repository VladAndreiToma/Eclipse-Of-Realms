// deci aici o sa tin date despre companie -- copyright etc
// o sa pun si socials links gen butoane
// date despre interactiunea cu useru: politica cookies, confidentialitate, politici, informatii, termeni
import { Link } from "react-router-dom";
const nebulaInteractiveLogo = '/pics/nebula-interactive.png';
const youtube = "/pics/miscs/youtube.png";  const instagram = '/pics/miscs/instagram.png';  const x = '/pics/miscs/x.png'; const tiktok = '/pics/miscs/tiktok.png'; const facebook = '/pics/miscs/facebook.png';
export default function Footer(){
    return(
        <div className="footer">
           <div className="services-in-footer-row-nonmodification">
                <img src={youtube} className="socials"/>
                <img src={instagram} className="socials"/>
                <img src={facebook} className="socials"/>
                <img src={x} className="socials"/>
                <img src={tiktok} className="socials"/>
            </div>
            <div className="services-in-footer">
                <img src={nebulaInteractiveLogo} alt="n.i" style={{borderRadius:'10rem', width:'6rem', height:'6rem'}}/>
            </div>
            <div className="services-in-footer">
                <label style={{textAlign:"center"}}>© 2025 Nebula Interactive™, a guild of creators forging realms, fantasy adventures, and PvP wonders. All worlds, artifacts, and works herein are the sole dominion of Nebula Interactive. All rights reserved</label>
            </div>
            <div className="services-in-footer">
                <Link className="footer-links">Confidentiality</Link>
                <Link className="footer-links">Cookies</Link>
                <Link className="footer-links">Internal Policies</Link>
                <Link className="footer-links">Informations</Link>
                <Link className="footer-links">Terms and Conditions</Link>
            </div>
            <div className="services-in-footer">
                <img src="/pics/pegi/pegi-12.png" className="pegis"/>
                <img src="/pics/pegi/pegi-violence.png" className="pegis"/>
                <img src="/pics/pegi/pegi-cursing.png" className="pegis"/>
                <img src="/pics/pegi/pegi-fear.png" className="pegis"/>
                <img src="/pics/pegi/pegi-pay.png" className="pegis"/>
                <img src="/pics/pegi/pegi-online.png" className="pegis"/>
            </div>
        </div>
    )
}