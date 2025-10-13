import Users from "../models/Users.js";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// Register
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const doesUserExist = await Users.findOne({ email });
        if (doesUserExist) {
            return res.status(400).json({ message: "This User already exists!" });
        }

        const user = await Users.create({
            name,
            email,
            password,
            lastLogin: Date.now(), // initial lastLogin = data crearii contului
        });

        if (user) {
            res.status(201).json({
                tag:"Register on Nebula Interactive is successful!",
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            // actualizam lastLogin
            user.lastLogin = Date.now();
            await user.save();

            res.json({
                tag: "Login successful on Nebula Interactive",
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Get user profile
export const getUserProfile = async (req, res) => {
    try {
        // req.user este deja setat de protect middleware
        if (!req.user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            role: req.user.role,
            lastLogin: req.user.lastLogin,
            createdAt: req.user.createdAt,
            updatedAt: req.user.updatedAt,
            // aici poți adăuga și alte metrici: playTime, points etc.
            playTime: req.user.playTime || 0,
            points: req.user.points || 0,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
