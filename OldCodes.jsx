import NavBar from "../components/navigation/NavBar";
import Footer from "./Footer";
import FooterPreBanner from "../FooterPreBanner";
import background from "/pics/texture2.webp";
import { useState, useEffect, useRef } from "react";

const categories = ["all","hero","realm","pvp","update","event"];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [newsItems, setNewsItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("latest");
  const sidebarRef = useRef(null);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const queryParams = [];
        if(activeCategory !== "all") queryParams.push(`category=${activeCategory}`);
        if(sortOrder) queryParams.push(`sort=${sortOrder}`);
        const res = await fetch(`http://localhost:5000/news${queryParams.length ? "?" + queryParams.join("&") : ""}`);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setNewsItems(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchNews();
  }, [activeCategory, sortOrder]);

  // Scroll shadow effect
  useEffect(() => {
    const sidebar = sidebarRef.current;
    const handleScroll = () => setShowShadow(sidebar.scrollTop > 5);
    if(sidebar) sidebar.addEventListener('scroll', handleScroll);
    return () => sidebar && sidebar.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page" style={{position:"relative"}}>
      <NavBar/>

      <div style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(30,30,30,0.6), rgba(50,50,50,0.6)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

        {/* Sidebar */}
        <aside 
          ref={sidebarRef}
          style={{
            width: "20rem",
            backgroundColor: "rgba(40,40,40,0.7)",
            color: "#FFF",
            position: "sticky",
            top: 0,
            height: "100vh",
            padding: "1rem",
            borderRadius: "0 15px 15px 0",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            boxShadow: showShadow ? "2px 0 15px rgba(0,0,0,0.6)" : "2px 0 15px rgba(0,0,0,0.4)",
            overflowY: "auto",
            transition: "box-shadow 0.3s",
            justifyContent:"center",
          }}
        >
          <label style={{color:"#FFF", fontWeight:"700", fontSize:'3rem', fontFamily:'Cinzel'}}>Categories</label>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                padding:"0.6rem 1rem",
                backgroundColor: activeCategory===cat ? "rgba(30,144,255,0.7)" : "rgba(0,0,0,0.2)",
                border:"1px solid rgba(255,255,255,0.3)",
                borderRadius:"0.5rem",
                cursor:"pointer",
                color:"#FFF",
                fontWeight:"bold",
                fontFamily:'Cinzel',
                fontSize:'1rem',
                transition:"all 0.3s",
                textAlign: "center"
              }}
              onMouseEnter={e => e.currentTarget.style.background="linear-gradient(135deg, #40E0D0, #1E90FF)"}
              onMouseLeave={e => e.currentTarget.style.background=activeCategory===cat ? "rgba(30,144,255,0.7)" : "rgba(0,0,0,0.2)"}
              onMouseDown={e => e.currentTarget.style.transform="scale(0.97)"}
              onMouseUp={e => e.currentTarget.style.transform="scale(1)"}
            >
              {cat.toUpperCase()}
            </button>
          ))}

          {/* Sort selector */}
          <div style={{textAlign:"center", marginTop:"1rem"}}>
            <label style={{color:"#FFF", fontWeight:"600", display:"block", marginBottom:"0.5rem", fontFamily:'Cinzel'}}>Relevance</label>
            <select
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
              style={{
                width:"100%",
                padding:"0.6rem 1rem",
                borderRadius:"0.75rem",
                border:"1px solid rgba(255,255,255,0.3)",
                background:"linear-gradient(145deg, rgba(64,224,208,0.7), rgba(30,144,255,0.7))",
                color:"#FFF",
                fontWeight:"600",
                cursor:"pointer",
                fontSize:"1rem",
                appearance:"none",
                outline:"none",
                transition:"all 0.3s",
                textAlignLast: "center" // center text for select
              }}
              onMouseEnter={e => e.currentTarget.style.background="linear-gradient(135deg, #1E90FF, #40E0D0)"}
              onMouseLeave={e => e.currentTarget.style.background="linear-gradient(145deg, rgba(64,224,208,0.7), rgba(30,144,255,0.7))"}
            >
              <option value="latest" style={{backgroundColor:'#555', color:'#FFF', textAlign:'center'}}>Latest ↓</option>
              <option value="oldest" style={{backgroundColor:'#555', color:'#FFF', textAlign:'center'}}>Oldest ↑</option>
            </select>
          </div>
        </aside>

        {/* News content */}
        <main style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
          minWidth: 0 // important pentru overflow să nu depășească
        }}>
          {Array.isArray(newsItems) && newsItems.map(item => (
            <article key={item._id} style={{
              padding: "1.5rem",
              backgroundColor: "rgba(60,60,60,0.7)",
              borderRadius: "1rem",
              color: "#FFF",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform="translateY(-5px)";
              e.currentTarget.style.boxShadow="0 12px 25px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform="translateY(0)";
              e.currentTarget.style.boxShadow="0 8px 20px rgba(0,0,0,0.3)";
            }}
            >
              <h3 style={{fontSize:"1.6rem", fontWeight:"700", color:"#40E0D0", marginBottom:"0.5rem"}}>{item.title}</h3>
              <p style={{fontSize:"1rem", lineHeight:"1.5"}}>{item.story || item.description}</p>
              <span style={{marginTop:"1rem", fontSize:"0.85rem", color:"#B0B0B0"}}>{new Date(item.createdAt).toLocaleDateString()}</span>
            </article>
          ))}
        </main>

      </div>

      <FooterPreBanner/>
      <Footer/>
    </div>
  );
}
