import mongoose, { mongo } from 'mongoose';
const heroSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    level: {type: Number, default: 1},
    description: { type: String },
    powers: [{type: String}],
    pictures: [{type: String}],
    createdAt: {type: Date, default: Date.now() }
})

const Hero = mongoose.model("Hero", heroSchema);

export default Hero