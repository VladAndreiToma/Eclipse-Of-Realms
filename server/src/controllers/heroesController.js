import Hero from "../models/Hero.js";
//new hero endpoint
export const createHero = async(req, res) => {
    try{
        const hero = new Hero(req.body)
        const savedHero = await hero.save();
        res.status(201).json(savedHero); // i want to see if it was created
    }catch(error){
        res.status(400).json({error: error.message})
    }
};
// getting all heroes
export const getAllHeroes = async(req,res) => {
    try{
        const heroes = await Hero.find(); // since all heroes comply with no filters it returns all
        res.status(200).json(heroes);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};
// getting one specific hero by its id
export const getHeroById = async(req,res)=>{
    try{
        const hero = await Hero.findById(req.params.id);
        if(!hero)
            return res.status(404).json({message: "Hero was not found in the db"});
        res.status(200).json(hero);
    }catch(error){
        res.status(500).jsons({error: error.message});
    }
};
//updating a hero
export const updateHero=async(req,res)=>{
    try{
        const updatedHero = await Hero.findByIdAndUpdate(req.params.id, req.body, {new: true}); // looks for id then it updates the stats send through body via the new key
        if(!updatedHero)
            return res.status(404).json({message:"Hero was not found!"});
    }catch(error){
        res.status(400).json({error: error.message})

    }
};
// delete a hero
export const deleteHero = async(req,res)=>{
    try{const deletedHero = await Hero.findByIdAndDelete(req.params.id); if(!deletedHero) return res.status(404).json({message: "Hero not found"}); return res.status(200).json({message: "Hero deleted !"})}catch(err){res.status(500).json({error:err.message})}
}

