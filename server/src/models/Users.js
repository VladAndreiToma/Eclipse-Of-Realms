import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, default: "user" },

        // campuri de metrica/profil
        playTime: { type: Number, default: 0 },           // in minute sau secunde
        lastLogin: { type: Date },                        // ultima data cand a facut login
        achievements: { type: [String], default: [] },    // lista cu premii sau realizari
        downloads: { type: Number, default: 0 },         // de cate ori a descarcat jocul
        status: { type: String, default: "active" }      // status cont: active, banned, etc.
    },
    { timestamps: true } // pastreaza createdAt si updatedAt
);

// cripteaza parola inainte de salvare
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// metoda pentru compararea parolei la login
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

const Users = mongoose.model("Users", userSchema);

export default Users;
