import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Users from "./src/models/Users.js";

// conectare la DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB conectata ca admin"))
  .catch((err) => console.error(err));

// stergere user
const deleteUser = async (email) => {
  try {
    const result = await Users.deleteOne({ email }); // sterge dupa email
    if (result.deletedCount === 1) {
      console.log(`User with email ${email} deleted successfully.`);
    } else {
      console.log(`User with email ${email} not found.`);
    }
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};

// exemplu: stergem userul cu email "test@example.com"
deleteUser("vladtepes99105@gmail.com");
