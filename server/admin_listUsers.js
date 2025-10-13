import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Users from "./src/models/Users.js";

// ma loghez ca admin la baza de date
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB conectata ca admin")).catch(err=>console.error(err));

const listUsers = async () => {
  try {
    const users = await Users.find().select("-password"); // fără parola
    console.log("All users:", users);
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};

listUsers();