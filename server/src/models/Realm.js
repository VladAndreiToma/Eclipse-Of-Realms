import mongoose from "mongoose";
const realmSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String},
    landmarks: [{type:String}],
    allowedPlayers: {type:Number, default: 20},
    createdAt:{type: Date, default: Date.now}
});

export default mongoose.model("Realm", realmSchema);