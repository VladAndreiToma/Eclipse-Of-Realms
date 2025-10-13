import { useState, useEffect } from "react";
import NavBar from "../components/navigation/NavBar";
import FooterPreBanner from "../FooterPreBanner";
import Footer from "./Footer";

const banner = '/pics/worlds/golden-cave.webp';

/*const allHeroes = [
    {id:1,name:"Aeloria", thumbnail:'/heroes/Aeloria.webp'},
    {id:2,name:"Kael", thumbnail:'/heroes/Kael.webp'},
    {id:3,name:"Nyxara", thumbnail:'/heroes/Nyxara.webp'},
    {id:4,name:"Ravagar", thumbnail:'/heroes/Ravagar.webp'},
    {id:5,name:"Xyrith", thumbnail:'/heroes/Xyrith.webp'},
    {id:6,name:"Malrakar", thumbnail:'/heroes/Malrakar.webp'},
    {id:7,name:"Aarok", thumbnail:'/heroes/Aarok.webp'},
    {id:8,name:"Morivelle", thumbnail:'/heroes/Morivelle.webp'},
    {id:9,name:"Liryelle", thumbnail:'/heroes/Liryelle.webp'},
    {id:10,name:"Cyradion", thumbnail:'/heroes/Cyradion.webp'},
    {id:11,name:"Sylvara", thumbnail:'/heroes/Sylvara.webp'},
    {id:12,name:"Vellyra", thumbnail:'/heroes/Vellyra.webp'},
    {id:13,name:"Draevin", thumbnail:'/heroes/Draevin.webp'},
    {id:14, name:"Zaroq the Defiler", thumbnail:'/heroes/Zaroq.webp'},
    {id:15, name:"Onyxia", thumbnail:'/heroes/Onyxia.webp'},
    {id:16, name:"Lunareth", thumbnail:'/heroes/Lunareth.webp'},
    {id:17, name:"Lio'Rhen", thumbnail:'/heroes/Lio\'Rhen.webp'},
    {id:18, name:'Drae\'Lon Stormbinder', thumbnail:"/heroes/Drae'Lon.webp"},
    {id:19, name:"Xeroth The LittleFoot", thumbnail:'/heroes/Xeroth.webp'},
    {id:20, name:"Kar'Li", thumbnail:'/heroes/Kar\'Li.webp'} ,
    
];*/

export default function Champions(){
    const [visibleCount, setVisibleCount] = useState(24);
    const [fontSizes,setFontSizes] = useState({title:"6rem", subtitle:"1.5rem"});
    const [gridCols, setGridCols] = useState("repeat(auto-fill,minmax(20rem,1fr))");

    const [allHeroes, setAllHeroes] = useState([]);

    const handleShowMoreHeroes = () => {
        setVisibleCount(prev => Math.min(prev+24, allHeroes.length));
    };


    useEffect(() => {
        fetch('/heroes/heroes.json')
            .then(res => res.json())
            .then(data => setAllHeroes(data))
            .catch(err => console.error('Error loading heroes JSON:', err));
    }, []);


    useEffect(() => {
        const handleResize = () => {
            // Font sizes
            if(window.innerWidth < 640){
                setFontSizes({title:"2rem", subtitle:"1rem"});
            } else if(window.innerWidth < 1280){
                setFontSizes({title:"3.5rem", subtitle:"1.2rem"});
            } else {
                setFontSizes({title:"6rem", subtitle:"1.5rem"});
            }
            // Grid columns
            if(window.innerWidth < 640){
                setGridCols("1fr"); // 1 card per rand
            } else if(window.innerWidth < 1280){
                setGridCols("repeat(2,1fr)"); // 2 carduri pe rand
            } else {
                setGridCols("repeat(auto-fill,minmax(20rem,1fr))"); // default
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="page" style={{ position: "relative" }}>
            <NavBar />

            <div style={{ position: "relative", width: "100%" }}>
                {/* Background */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: -2
                }} />
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    zIndex: -1
                }} />

                {/* Header */}
                <div style={{position:"relative",zIndex:1,color: "white",display: "flex",flexDirection: "column",alignItems: "center", textAlign: "center",padding: "2rem 2rem", gap:'2rem',background:'rgba(0,0,0,0.5)' ,fontFamily: "Marcellus SC"}}>
                    <label style={{ fontSize: fontSizes.title, fontWeight: 900}}>MEET YOUR CHAMPION</label>
                    <label style={{ fontSize: fontSizes.subtitle}}>
                        Browse between our over 100 candidates and choose the one who best suits your style
                    </label>
                    <label style={{ fontSize: fontSizes.subtitle }}>
                        Click on them to find out their story in detail
                    </label>
                </div>

                {/* Hero grid */}
                <div className="grid" style={{
                    position: "relative",
                    zIndex: 1,
                    display: "grid",
                    gridTemplateColumns: gridCols,
                    gap: "1.2rem",
                    padding: "3rem"
                }}>
                    {allHeroes.slice(0, visibleCount).map(hero => (
                        <div key={hero.id} className="hero-card" style={{ textAlign: "center" }}>
                            <img src={hero.thumbnail} alt={hero.name} loading="lazy" style={{ width: "100%", borderRadius: "8px" }} />
                            <div className="hero-card-name" style={{ marginTop: "0.5rem", color: "white", fontWeight: "bold" }}>{hero.name}</div>
                        </div>
                    ))}
                </div>

                {visibleCount < allHeroes.length && (
                    <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
                        <button onClick={handleShowMoreHeroes} style={{ padding: "0.8rem 1.5rem", borderRadius: "8px", border: "none", backgroundColor: "#333", color: "white", cursor: "pointer" }}>Show More</button>
                    </div>
                )}
            </div>

            <FooterPreBanner />
            <Footer />
        </div>
    );
}
