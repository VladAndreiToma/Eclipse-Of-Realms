import { useEffect, useState } from "react";
import NavBar from "../../components/navigation/NavBar";
import background from "/pics/realms.webp";
import FooterPreBanner from "../../FooterPreBanner";
import Footer from "../Footer";

export default function News() {
  const [allNewsItems, setAllNewsItems] = useState([]);
  const [sortTempora, setSortTempora] = useState("latest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        setLoading(true);
        const queryParams = [];
        queryParams.push("category=event");
        if (sortTempora) queryParams.push(`sort=${sortTempora}`);
        const res = await fetch(
          `http://localhost:5000/news${queryParams.length ? "?" + queryParams.join("&") : ""}`
        );
        if (!res.ok) throw new Error("The server network connection is not ok");
        const data = await res.json();
        setAllNewsItems(data);
      } catch (err) {
        console.error("Fetch error: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllNews();
  }, [sortTempora]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "Unknown";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "Unknown";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="news-page">
      <NavBar/>
      <div className="news-bg">
        <div className="news-banner">
          <label className="news-banner-title">EVENT & CHRONICLES</label>
          <label className="news-banner-sub">
            All events detailed here rather social or regarded to the multiplayer
          </label>
        </div>

        <div className="news-grid">
          {loading ? (
            <div className="news-loading">🔄 Summoning the latest chronicles...</div>
          ) : allNewsItems.length > 0 ? (
            allNewsItems.map((news, i) => (
              <div key={i} className="news-card">
                <div>
                  <label className="news-card-title">{news.title}</label>
                  <p className="news-card-desc">
                    {news.description || "No description provided for this news item."}
                  </p>
                </div>
                <div className="news-card-date">From: {formatDate(news.createdAt)}</div>
              </div>
            ))
          ) : (
            <div className="news-empty">⚠️ No chronicles found.</div>
          )}
        </div>
      </div>
      <FooterPreBanner/>
      <Footer/>
    </div>
  );
}
