import { useState, useEffect } from "react";
const texture = "/pics/texture2.webp";

export default function MainArticles() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isNarrow = windowWidth < 1280;
  const containerPaddingH = isNarrow ? "1.5rem" : "4rem";
  const containerPaddingV = "2rem";
  const fontSizeLabel = isNarrow ? "2rem" : "3rem";

  const [loadingRandomNews, setLoadingRandomNews] = useState(true);
  const [randomNews, setRandomNews] = useState([]);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const fetchRandomNews = async () => {
      try {
        setFadeIn(false); // pornim fade-out
        await new Promise((r) => setTimeout(r, 800)); // așteptăm dispariția
        setLoadingRandomNews(true);
        const res = await fetch("http://localhost:5000/news?sort=latest");
        if (!res.ok) throw new Error("Server network unreachable");
        const data = await res.json();
        const shuffled = data.sort(() => 0.5 - Math.random());
        setRandomNews(shuffled.slice(0, 3));
        setFadeIn(true); // pornim fade-in
      } catch (err) {
        console.error("Error fetching random news:", err);
      } finally {
        setLoadingRandomNews(false);
      }
    };

    fetchRandomNews();
    const interval = setInterval(fetchRandomNews, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: isNarrow ? "auto" : "40rem",
        backgroundImage: `url(${texture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: `${containerPaddingV} ${containerPaddingH}`,
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "1rem",
          width: "100%",
          height: "100%",
        }}
      >
        <label style={{ fontFamily: "Cinzel", fontWeight: "900", fontSize: fontSizeLabel }}>
          Stay up to date with latest developments
        </label>

        <div
          style={{
            display: "flex",
            flexDirection: isNarrow ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
            height: "100%",
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          {loadingRandomNews ? (
            <label style={{ fontSize: "1.5rem", color: "#333" }}>Loading articles...</label>
          ) : randomNews.length > 0 ? (
            randomNews.map((news, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  minWidth: isNarrow ? "100%" : "30%",
                  height: "100%",
                  backgroundColor: "rgba(252,252,252,0.65)",
                  backdropFilter: "blur(5px)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.6)",
                  borderRadius: "1rem",
                  padding: "1rem",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "left",
                  fontSize: "1.6rem",
                  color: "#1a1a1a",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.8)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.6)";
                }}
              >
                <b style={{ fontFamily: "Cinzel", fontSize: "1.9rem" }}>{news.title}</b>
                <label style={{ marginTop: "0.5rem" }}>
                  {news.description?.length > 200
                    ? news.description.slice(0, 200) + "..."
                    : news.description}
                </label>
              </div>
            ))
          ) : (
            <label style={{ fontSize: "1.5rem", color: "#333" }}>No articles found.</label>
          )}
        </div>
      </div>
    </div>
  );
}
