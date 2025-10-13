import { useEffect, useState } from "react";

const banner = '/pics/banners/purple-gate.webp';

export default function IntroBanner() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fonturi și dimensiuni responsive
    const headingFont = windowWidth < 600 ? '2rem' : windowWidth < 900 ? '2.5rem' : '3rem';
    const normalFont = windowWidth < 600 ? '1rem' : windowWidth < 900 ? '1.5rem' : '2rem';
    const containerPadding = windowWidth < 600 ? '2rem 1rem' : windowWidth < 900 ? '3rem 2rem' : '3rem';
    const contentWidth = windowWidth < 900 ? '100%' : '50%';

    return (
        <div style={{ position: "relative", width: '100%', height: '40rem', overflow: 'hidden' }}>
            <img
                src={banner}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: "cover",
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                boxSizing: "border-box",
                padding: containerPadding,
                display: 'flex',
                flexDirection: "column",
                justifyContent: "center",
                fontFamily: 'Goudy Bookletter 1911',
                color: 'white',
                gap: '2rem',
                background: 'rgba(0,0,0,0.3)',
                overflow: "hidden"
            }}>
                <div style={{
                    width: contentWidth,
                    height: "auto",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: 'column',
                    fontSize: normalFont,
                    gap: '1rem'
                }}>
                    <label style={{ fontSize: normalFont }}>Latest game updates</label>
                    <label style={{ fontSize: headingFont, fontWeight: "bold", fontStyle: "italic", lineHeight: 1.2 }}>
                        UPDATES IN OUR<br />LATEST REALM WORLD
                    </label>
                    <label style={{ fontStyle: "italic", fontSize: normalFont }}>
                        Faster lobbies for matchmaking, new map landmarks. More opportunities to farm gold
                    </label>
                </div>
                <button className="play-now-gold-enhanced">See More</button>
            </div>
        </div>
    );
}
