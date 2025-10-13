// server/middleware/authMiddlewareJWT.js
import jwt from "jsonwebtoken";
import Users from "../models/Users.js";

// Middleware pentru protejarea rutelor
export const protect = async (req, res, next) => {
  let token;

  // Verificăm dacă există headerul Authorization și începe cu "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extragem token-ul din header
      token = req.headers.authorization.split(" ")[1];

      // Verificăm token-ul
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Căutăm user-ul în DB fără a returna parola
      req.user = await Users.findById(decoded.id).select("-password");

      next(); // totul e ok, continuăm la controller
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};