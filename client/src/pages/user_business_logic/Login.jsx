import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const banner = '/pics/banners/futuristic-game-hall.webp';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🧠 verifică dacă există deja user logat
  useEffect(() => {
    const savedUser = localStorage.getItem("userInfo");
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        // dacă are token și pare valid -> mergem direct la profil
        if (userData.token) {
          navigate("/profile");
        }
      } catch (err) {
        console.error("Error parsing userInfo:", err);
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      // 🧩 salvăm token + datele userului
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/profile");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        fontFamily: "Cormorant Garamond",
        fontSize: "1.5rem",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "rgba(0,0,0,0.85)",
          padding: "2.5rem",
          borderRadius: "12px",
          width: "22rem",
          color: "white",
          boxShadow: "0 0 15px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Login</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.6rem",
              borderRadius: "6px",
              border: "1px solid #fff",
              backgroundColor: "#111",
              color: "#fff",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.6rem",
              borderRadius: "6px",
              border: "1px solid #fff",
              backgroundColor: "#111",
              color: "#fff",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.6rem",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#333",
              color: "#fff",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            Login
          </button>
          {error && (
            <p style={{ color: "crimson", textAlign: "center" }}>{error}</p>
          )}
          <label style={{ textAlign: "center" }}>
            No account? Enter the Realms{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "goldenrod",
                fontWeight: "900",
              }}
              to={"/register"}
            >
              Register
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
}
