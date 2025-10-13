import Realm from "../models/Realm.js";
//create a realm
exports.createRealm = async(req,res)=>{
    try {
        const realm = new Realm(req.body);
        await realm.save();
        res.status(201).json(realm);
    }catch(err){
        res.status(400).json({ error: err.message });
    }
};

//get all realms
exports.getRealm = async(req,res)=>{
    try{
        const realms = await Realm.find();
        res.json(realms);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

//get specific realm
exports.getRealById = async(req,res)=>{
    try {
        const realm = await Realm.findById(req.params.id)
        if(!realm) return res.status(404).json({error: "Realm is not found"})
        res.json(realm);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};
