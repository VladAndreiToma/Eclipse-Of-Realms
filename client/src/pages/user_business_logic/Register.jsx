import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaDiscord } from "react-icons/fa";

const banner = '/pics/banners/futuristic-game-hall.webp';

export default function Register() {
  const navigate = useNavigate();

  // state pentru input-uri
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to register");

      // salvăm token-ul în localStorage
      localStorage.setItem("userInfo", JSON.stringify(data));

      // redirect către profil / dashboard
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", width: "100vw", fontFamily:'Cormorant Garamond', fontSize:'1.5rem', position: "relative", backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }}></div>
      <div style={{ position: "relative", zIndex: 1, backgroundColor: "rgba(0,0,0,0.85)", padding: "2.5rem", borderRadius: "12px", width: "22rem", color: "white", boxShadow: "0 0 15px rgba(0,0,0,0.5)", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Register</h2>
        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={e => setUsername(e.target.value)}
            style={{ width: "100%", padding: "0.6rem", borderRadius: "6px", border: "1px solid #fff", backgroundColor: "#111", color: "#fff", outline: "none", boxSizing: "border-box" }} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: "0.6rem", borderRadius: "6px", border: "1px solid #fff", backgroundColor: "#111", color: "#fff", outline: "none", boxSizing: "border-box" }} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.6rem", borderRadius: "6px", border: "1px solid #fff", backgroundColor: "#111", color: "#fff", outline: "none", boxSizing: "border-box" }} 
          />
          <button 
            type="submit" 
            disabled={loading}
            style={{ width: "100%", padding: "0.6rem", borderRadius: "6px", border: "none", backgroundColor: "#333", color: "#fff", cursor: "pointer", boxSizing: "border-box" }}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {error && <p style={{color:"red", textAlign:"center"}}>{error}</p>}

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0.6rem", borderRadius: "6px", border: "none", color: "white", fontWeight: "bold", cursor: "pointer", boxSizing: "border-box", backgroundColor: "#db4437" }}>
            <FaGoogle style={{ marginRight: "0.5rem" }} /> Register with Google
          </button>
          <button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0.6rem", borderRadius: "6px", border: "none", color: "white", fontWeight: "bold", cursor: "pointer", boxSizing: "border-box", backgroundColor: "#5865F2" }}>
            <FaDiscord style={{ marginRight: "0.5rem" }} /> Register with Discord
          </button>
        </div>

        <label style={{width:'100%', textAlign:"center"}}>
          Are you part of the Realms?
          <Link to={'/login'} style={{color:"goldenrod", textDecoration:"none", fontWeight:'900'}}> Login</Link>
        </label>
      </div>
    </div>
  );
}