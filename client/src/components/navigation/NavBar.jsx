import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaSearch, FaTimes, FaBars, FaChevronDown } from "react-icons/fa";

const eor = '/pics/banners/eor-banner.webp';
const ni = '/pics/nebula-interactive.png';

const categories = ["All", "Hero", "Realm", "Pvp", "Update", "Event"];
const discoverItems = ["Stronghold", "Realm"]; // <-- Nou

export default function NavBar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [newsOpen, setNewsOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false); // <-- Nou

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isNarrow = windowWidth < 1280;

  const navLinks = [
    { to: "/nebula-interactive/home", label: "NEBULA INTERACTIVE" },
    { to: "/", label: "EOR" },
    { to: "/how-to-play", label: "ABOUT GAME" },
    { to: "/champions", label: "CHAMPIONS" },
    { to: "/news", label: "NEWS" },
    { to: "/patch-notes", label: "PATCH NOTES" },
    { to: "/discover", label: "DISCOVER" },
    { to: "/esports", label: "E-SPORTS" },
    { to: "/more", label: "MORE" },
  ];

  return (
    <nav className="navbar">
      <div className="contents">
        {!isNarrow &&
          navLinks.map((link, i) => {
            if (link.label === "NEWS") {
              return (
                <DropdownNav
                  key={i}
                  label={link.label}
                  baseTo={link.to}
                  items={categories}
                  isOpen={newsOpen}
                  setOpen={setNewsOpen}
                />
              );
            }

            // Nou — dropdown pentru DISCOVER
            if (link.label === "DISCOVER") {
              return (
                <DropdownNav
                  key={i}
                  label={link.label}
                  baseTo={link.to}
                  items={discoverItems}
                  isOpen={discoverOpen}
                  setOpen={setDiscoverOpen}
                />
              );
            }

            return (
              <NavItem key={i} to={link.to}>
                {link.label === "EOR"
                  ? <img src={eor} style={{ width: '2rem', height: '2rem' }} />
                  : link.label === 'NEBULA INTERACTIVE'
                    ? <img src={ni} style={{ width: '2rem', height: '2rem' }} />
                    : link.label}
              </NavItem>
            );
          })}
      </div>

      {/* Secțiunea din dreapta */}
      <div className="miscs" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {!isNarrow && (
          <SearchBar
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        )}
        {!isNarrow && !searchOpen && <FaGlobe className="misc-item" />}
        {!isNarrow && !searchOpen && <Link className="play-now" to={"/login"}>Play Now</Link>}

        {/* versiunea mobilă */}
        {isNarrow && (
          <MobileMenu
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            navLinks={navLinks}
          />
        )}
      </div>
    </nav>
  );
}

/* ✅ Componentă generică pentru dropdown */
function DropdownNav({ label, baseTo, items, isOpen, setOpen }) {
  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className="nav-item"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
          cursor: "pointer",
          fontFamily: "Arial",
        }}
      >
        <Link to={baseTo} style={{ color: "inherit", textDecoration: "none" }}>
          {label}
        </Link>
        <FaChevronDown
          style={{
            fontSize: "0.8rem",
            transition: "transform 0.25s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            background: "#111",
            border: "1px solid #333",
            padding: "0.5rem 0",
            display: "flex",
            flexDirection: "column",
            zIndex: 999,
            minWidth: "10rem",
            animation: "fadeIn 0.25s ease",
          }}
        >
          {items.map((cat, j) => (
            <Link
              key={j}
              to={
                cat.toLowerCase() === "all"
                  ? baseTo
                  : baseTo === "/discover" && cat.toLowerCase() === "realm"
                  ? `${baseTo}/episodes-of-realms`
                  : `${baseTo}/${cat.toLowerCase()}`
              }
              className="nav-item"
              onMouseEnter={(e) => (e.target.style.background = "#222")}
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              {cat}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function NavItem({ to, children }) {
  return (
    <Link to={to} className="nav-item" style={{ fontFamily: children === "EOR" ? "Cinzel Decorative" : "Arial" }}>
      {children}
    </Link>
  );
}

function SearchBar({ searchOpen, setSearchOpen, searchText, setSearchText }) {
  return (
    <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
        style={{
          height: "2.5rem",
          width: searchOpen ? "22rem" : "0px",
          padding: searchOpen ? "0 0.5rem" : "0",
          marginRight: searchOpen ? "1.5rem" : "0",
          background: "#222",
          color: "white",
          border: "none",
          outline: "none",
          fontSize: "1rem",
          borderRadius: "0.25rem",
          transition: "width 0.3s ease",
        }}
      />
      <div
        style={{
          marginLeft: searchOpen ? "-3rem" : "0",
          cursor: "pointer",
          color: "white",
          transition: "margin-left 0.3s ease",
        }}
        onClick={() => {
          setSearchOpen(!searchOpen);
          if (searchOpen) setSearchText("");
        }}
      >
        {!searchOpen ? <FaSearch /> : <FaTimes />}
      </div>
    </div>
  );
}

/* ✅ Componentă mobilă (neafectată) */
function MobileMenu({ dropdownOpen, setDropdownOpen, navLinks }) {
  return (
    <div style={{ position: "relative" }}>
      <FaBars
        className="misc-item"
        style={{ cursor: "pointer" }}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      />
      {dropdownOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            width: "80%",
            maxWidth: "30rem",
            background: "#111",
            boxShadow: "-2px 0 8px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem",
            zIndex: 1000,
          }}
        >
          <FaTimes
            style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}
            onClick={() => setDropdownOpen(false)}
          />
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              className="nav-item"
              style={{
                fontFamily: link.label === "EOR" ? "Cinzel Decorative" : "Arial",
                color: "white",
                fontSize: "1.2rem",
                textDecoration: "none",
              }}
              onClick={() => setDropdownOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
