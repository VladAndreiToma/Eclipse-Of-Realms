import { useEffect, useState } from "react";
import WorldThumbnail from "./WorldThumbnail";
import { Link } from "react-router-dom";

const banner = '/pics/worlds/purple-forest.webp';

export default function KnowingTheGame() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isNarrow = windowWidth < 1280; // sub 80rem

    const padding = isNarrow ? '6rem 2rem' : '4rem 7rem';
    const sectionHeight = isNarrow ? '130rem' : '80rem'; 
    const thumbnailDirection = isNarrow ? 'column' : 'row';
    const thumbnailGap = isNarrow ? '3rem' : '7rem';
    const descWidth = isNarrow ? '90%' : '100%';
    const mainFont = isNarrow ? '1.4rem' : '1.8rem';
    const titleFont = isNarrow ? '2.2rem' : '3.2rem';

    return (
        <div 
            style={{ 
                position: "relative", 
                width: '100%', 
                height: sectionHeight,
                backgroundImage: `url(${banner})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat' 
            }}
        >
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: '100%',
                height: sectionHeight,
                boxSizing: "border-box",
                padding: padding,
                display: 'flex',
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: 'center',
                fontFamily: 'Goudy Bookletter 1911',
                color: 'white',
                background: 'rgba(0,0,0,0.2)',
                gap: '2rem'
            }}>
                <div style={{ 
                    width: '100%', 
                    padding: 0, 
                    margin: 0, 
                    display: "flex", 
                    flexDirection: 'column', 
                    fontSize: mainFont, 
                    justifyContent: "center", 
                    alignItems: "center", 
                    textAlign: "center", 
                    gap: '1rem' 
                }}>
                    <label>Welcome to the Realms Champion</label>
                    <label>At dusk of eclipses we prepare for battle</label>
                    <label style={{ fontSize: titleFont, fontWeight: '900' }}>
                        LEARN THE WORLDS AND THE WAYS TO ENSURE YOUR VICTORY AND LEGACIES
                    </label>
                </div>

                <div style={{ 
                    display: "flex", 
                    flexDirection: thumbnailDirection, 
                    height: "auto", 
                    width: '100%', 
                    justifyContent: "center", 
                    alignItems: "center", 
                    gap: thumbnailGap 
                }}>
                    <WorldThumbnail worldName={"Pyrothar"} />
                    <WorldThumbnail worldName={"Frostmere"} />
                    <WorldThumbnail worldName={"Noctryll"} />
                </div>

                <div style={{ 
                    fontSize: mainFont, 
                    width: descWidth, 
                    display: "flex", 
                    flexDirection: 'column', 
                    textAlign: 'center', 
                    justifyContent: "center", 
                    alignItems: "center", 
                    gap: '0.8rem' 
                }}>
                    <label>The recent development in our saga is the new season,<br/>set in Noctryll, the underworld shadow land</label>
                    <label>Players would have to face each other in the pvp game modes already known or to face collectively</label>
                    <label>our new legendary throne keepers to recover their lost souls</label>
                    <label>Noctryll also introduces new Dungeons where you can farm unique spells and tons of gold, each more difficult than the others</label>
                    <label>Stay tuned for new adventures, champions!</label>
                </div>
                <Link className="play-now-gold-enhanced" style={{textDecoration:'none'}} to={'/discover/episodes-of-realms'}>To Realms</Link>
            </div>
        </div>
    );
}
