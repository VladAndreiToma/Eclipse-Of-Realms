import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navigation/NavBar";

const banner = "/pics/banners/futuristic-game-hall.webp";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo) {
        navigate("/login");
        return;
      }

      const res = await fetch("http://localhost:5000/users/profile", {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });

      if (!res.ok) {
        localStorage.removeItem("userInfo");
        navigate("/login");
        return;
      }

      const data = await res.json();
      setUserData(data);
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm("Are you sure you want to delete your account?")) return;

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    await fetch(`http://localhost:5000/users/${userData._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });

    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  if (!userData)
    return (
      <div style={{ color: "#fff", textAlign: "center", marginTop: "3rem" }}>
        Loading profile...
      </div>
    );

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "calc(100vh)",
        background: `url(${banner}) center/cover no-repeat`,
        color: "#eee",
        fontFamily: "Cormorant Garamond",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.45)", // <- mai subtil overlay
          backdropFilter: "blur(5px)",
          zIndex: 0,
        }}
      ></div>
      <NavBar />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh)",
          boxSizing:'border-box',
          padding:'7rem 2rem 2rem 2rem',
        }}
      >
        <div
          style={{
            background: "rgba(25,25,25,0.8)",
            border: "1px solid rgba(255,100,255,0.4)",
            borderRadius: "14px",
            padding: "2rem 2rem",
            width: "90%",
            boxShadow: "0 0 25px rgba(180,0,255,0.25)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            height:'100%'
          }}
        >
          <h1
            style={{
              fontSize: "2.4rem",
              fontWeight: "900",
              color: "#ff66ff",
              textShadow: "0 0 10px #ff33ff, 0 0 20px #9900cc",
              textAlign: "center",
              marginBottom: "0.5rem",
            }}
          >
            Welcome, {userData.name}!
          </h1>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
            }}
          >
            {[
              { label: "Email", value: userData.email },
              { label: "Role", value: userData.role },
              {
                label: "Last Login",
                value: new Date(userData.lastLogin).toLocaleString(),
              },
              {
                label: "Account Created",
                value: new Date(userData.createdAt).toLocaleDateString(),
              },
              { label: "Play Time", value: `${userData.playTime} hours` },
              { label: "Points", value: userData.points },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "rgba(20, 20, 20, 0.9)",
                  padding: "0.8rem 1.2rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,100,255,0.25)",
                  boxShadow: "0 0 8px rgba(255,100,255,0.15)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    color: "#ff99ff",
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: "1rem",
                    textAlign: "right",
                    maxWidth: "60%",
                    wordBreak: "break-word",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.8rem",
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <button
              onClick={handleLogout}
              style={{
                flex: 1,
                padding: "0.8rem",
                background: "#9b4dff",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: "700",
                cursor: "pointer",
                textShadow: "0 0 6px #fff",
                boxShadow: "0 0 10px #9b4dff, 0 0 18px #6f00ff",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Logout
            </button>
            <button
              onClick={handleDeleteAccount}
              style={{
                flex: 1,
                padding: "0.8rem",
                background: "#ff0055",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: "700",
                cursor: "pointer",
                textShadow: "0 0 6px #fff",
                boxShadow: "0 0 10px #ff0055, 0 0 18px #aa0033",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
