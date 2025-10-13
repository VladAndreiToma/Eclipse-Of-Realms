import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import heroRoutes from "./routes/heroRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import mongoose from "mongoose";



dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// chem serviciile disponibile in news endpoint
app.use('/news', newsRoutes);

// chem serviciile disponibile in endpointurile ce sunt user concerning
// o sa leg top level in tree ul de link serviciile pe users keyword
// deci vor fi /users/login si /users/register
app.use("/users", userRoutes);

