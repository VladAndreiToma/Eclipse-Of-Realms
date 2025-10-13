// model pt stiri cand bag ceva nou in aplicatie
// o sa scriu ca admin
import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },          // titlu scurt
  story: { type: String },                          // poveste detaliată
  description: { type: String },                    // scurtă descriere / preview
  thumbnail: { type: String },                      // url sau path la imagine
  category: { type: String, default: "update" },   // update, pvp, events etc.
  createdAt: { type: Date, default: Date.now },
  visible: { type: Boolean, default: true }        // poți ascunde postări vechi
});

export default mongoose.model("News", NewsSchema);