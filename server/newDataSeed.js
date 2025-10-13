import mongoose from "mongoose";
import dotenv from "dotenv";
import News from "./src/models/News.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB conectată"))
  .catch(err => console.error(err));

const newNewsData = [
  // --- HERO ---
  { title: "New Hero – Kaelen, Blade of Shadows", story: "Kaelen strikes from the darkness with deadly precision.", description: "Unlock Kaelen and master shadow combat skills.", category: "hero" },
  { title: "Hero Rework – Meryn the Shieldbearer", story: "Meryn now absorbs damage while protecting allies efficiently.", description: "Rework gives Meryn improved defensive powers.", category: "update" },
  { title: "Legendary Hero Quest – Seraphine's Awakening", story: "Embark on Seraphine's quest to harness celestial energies.", description: "Begin Seraphine's epic journey.", category: "hero" },
  { title: "Hero Unlock – Theros, Warden of Ice", story: "Theros arrives controlling the frozen storms to dominate the battlefield.", description: "Unlock Theros through the Frost Trials.", category: "hero" },
  { title: "New Hero – Veyra, Flame Dancer", story: "Veyra wields fire in graceful and deadly combat.", description: "Discover Veyra and unlock fiery skills.", category: "hero" },
  { title: "Hero Update – Lorian the Unyielding", story: "Lorian's skills now empower nearby allies with defensive buffs.", description: "Experience Lorian's updated abilities.", category: "update" },
  { title: "Legendary Hero Quest – The Return of Draxor", story: "Draxor emerges from exile with new battle techniques.", description: "Complete ancient trials to unlock Draxor.", category: "hero" },
  { title: "Hero Unlock – Kaida the Stormbringer", story: "Kaida's arrival shakes the battlefield with elemental fury.", description: "Unlock Kaida via elemental trials.", category: "hero" },
  { title: "Hero Rework – Fenric the Swiftblade", story: "Fenric now performs multiple strikes in lightning-fast sequences.", description: "Experience Fenric's reworked combat style.", category: "update" },
  { title: "New Hero – Eryndor, Master of Beasts", story: "Eryndor commands wild creatures to fight alongside him.", description: "Unlock Eryndor through the Beast Trials.", category: "hero" },

  // --- EVENTS ---
  { title: "Event – Embermoon Festival", story: "Celebrate under the fiery moon with minigames and rewards.", description: "Join the Embermoon Festival for exclusive prizes.", category: "event" },
  { title: "Event – Thunderstrike Arena", story: "Lightning storms make combat more intense in the arena.", description: "Compete in the electrifying Thunderstrike Arena.", category: "event" },
  { title: "Event – The Harvest of Shadows", story: "Collect rare items during the once-in-a-century harvest.", description: "Gather mystical resources in this limited event.", category: "event" },
  { title: "Event – Moonlight Masquerade", story: "A mysterious ball appears only once a season with hidden challenges.", description: "Attend the Moonlight Masquerade for hidden treasures.", category: "event" },
  { title: "Event – Frostveil Siege", story: "Defend the icy fortress against invading armies.", description: "Join the Frostveil Siege to earn rare loot.", category: "event" },
  { title: "Event – Celestial Convergence", story: "Stars align to unlock unique celestial events.", description: "Witness the Celestial Convergence for special rewards.", category: "event" },
  { title: "Event – Crimson Hunt", story: "The red moon empowers dangerous beasts roaming the land.", description: "Hunt rare monsters during the Crimson Hunt.", category: "event" },
  { title: "Event – Festival of Winds", story: "Take part in aerial challenges and wind-based games.", description: "Celebrate the Festival of Winds with rewards.", category: "event" },
  { title: "Event – Night of the Ancients", story: "Ancient spirits roam the realms for one night only.", description: "Face spectral trials in the Night of the Ancients.", category: "event" },
  { title: "Event – Golden Harvest Gala", story: "Autumn brings bountiful rewards and rare loot.", description: "Celebrate the Golden Harvest Gala with quests.", category: "event" },

  // --- PVP ---
  { title: "PvP Season 9 Begins", story: "Compete in the new season for glory and legendary armor.", description: "Fight your way to the top in PvP Season 9.", category: "pvp" },
  { title: "Arena Update – Obsidian Colosseum", story: "A volcanic arena challenges the bravest champions.", description: "Test your skills in the Obsidian Colosseum.", category: "pvp" },
  { title: "Battle Royale – Frostfall Return", story: "Snowstorms create dynamic challenges for all combatants.", description: "Enter the Frostfall Battle Royale.", category: "pvp" },
  { title: "PvP Event – Shadow Clash", story: "Stealth and strategy are essential in this new arena.", description: "Join the Shadow Clash event and dominate.", category: "pvp" },
  { title: "Arena Update – Twin Peaks", story: "New dual-lane maps for more strategic gameplay.", description: "Compete across mirrored battlegrounds.", category: "pvp" },
  { title: "PvP Tournament – Champions Unite", story: "Top players battle for the title of ultimate champion.", description: "Sign up for the Champions Unite tournament.", category: "pvp" },
  { title: "PvP Mode – Gladiator's Trial", story: "Survive endless waves of opponents.", description: "Challenge yourself in Gladiator's Trial.", category: "pvp" },
  { title: "PvP Update – Arena Mastery", story: "New leaderboards and rewards for skilled players.", description: "Show off your mastery in the updated arenas.", category: "pvp" },
  { title: "Battle Royale – Twilight Storm", story: "Storms shift the battlefield and test combat strategy.", description: "Survive the Twilight Storm arena.", category: "pvp" },
  { title: "PvP Season 10 Preview", story: "New rules and rewards await the upcoming season.", description: "Prepare for PvP Season 10.", category: "pvp" },

  // --- REALM / WORLD ---
  { title: "Realm Expansion – Shattered Peaks", story: "New treacherous mountains challenge explorers.", description: "Ascend the Shattered Peaks and claim treasures.", category: "realm" },
  { title: "World Event – Rift Storms", story: "Magical rifts create unpredictable hazards.", description: "Seal the rifts to restore order.", category: "realm" },
  { title: "Realm Discovery – Crystal Caves", story: "Hidden caves filled with crystalline formations appear.", description: "Explore Crystal Caves for rare artifacts.", category: "realm" },
  { title: "Realm Expansion – Emberfall Fields", story: "Volcanic plains with hidden dangers emerge.", description: "Discover the secrets of Emberfall Fields.", category: "realm" },
  { title: "World Event – Skyfire Convergence", story: "Flying creatures and storms dominate the skies.", description: "Participate in Skyfire Convergence.", category: "realm" },
  { title: "Realm Discovery – Whispering Forest", story: "Mysterious forest hides ancient knowledge.", description: "Explore Whispering Forest to uncover secrets.", category: "realm" },
  { title: "Realm Expansion – Frostwind Tundra", story: "Icy plains and new monsters challenge adventurers.", description: "Survive Frostwind Tundra and earn rewards.", category: "realm" },
  { title: "World Event – Temporal Flux", story: "Time rifts alter reality temporarily.", description: "Close temporal anomalies during this event.", category: "realm" },
  { title: "Realm Discovery – Sunken Ruins", story: "Ancient underwater ruins await exploration.", description: "Dive into Sunken Ruins for rare loot.", category: "realm" },
  { title: "Realm Expansion – Ashen Wastes", story: "Desolate lands filled with hostile creatures appear.", description: "Survive the Ashen Wastes and claim treasure.", category: "realm" },

  // --- UPDATES / PATCHES ---
  { title: "Patch 2.8 – Combat Refinement", story: "Combat mechanics adjusted for smoother gameplay.", description: "Experience refined combat in patch 2.8.", category: "update" },
  { title: "Patch 2.9 – Visual Enhancements", story: "Improved textures and effects across the realms.", description: "Enjoy enhanced visuals in patch 2.9.", category: "update" },
  { title: "Patch 3.0 – Guild Features", story: "New tools for guild management and collaboration.", description: "Manage guilds efficiently in patch 3.0.", category: "update" },
  { title: "Patch 3.1 – Dungeon Balancing", story: "Dungeons adjusted for better pacing and challenge.", description: "Tackle rebalanced dungeons in patch 3.1.", category: "update" },
  { title: "Patch 3.2 – Seasonal Mechanics", story: "New seasonal effects and bonuses implemented.", description: "Experience the seasonal updates in patch 3.2.", category: "update" },
  { title: "Patch 3.3 – Boss Rework", story: "Raid bosses rebalanced for fairer encounters.", description: "Challenge updated bosses in patch 3.3.", category: "update" },
  { title: "Patch 3.4 – UI Tweaks", story: "Interface refined for usability and clarity.", description: "Navigate the updated UI in patch 3.4.", category: "update" },
  { title: "Patch 3.5 – Performance Boosts", story: "Optimizations reduce loading times and lag.", description: "Enjoy improved performance in patch 3.5.", category: "update" },
  { title: "Patch 3.6 – PvP Enhancements", story: "New PvP rules and balance adjustments.", description: "Fight in enhanced PvP arenas in patch 3.6.", category: "update" },
  { title: "Patch 3.7 – Exploration Updates", story: "Expanded maps and hidden treasures added.", description: "Explore new content in patch 3.7.", category: "update" },
];

// adaugă timestamp unic
newNewsData.forEach((item, index) => {
  item.createdAt = new Date(Date.now() - index * 1000);
});

const seedNewData = async () => {
  try {
    await News.insertMany(newNewsData);
    console.log(`✅${newNewsData.length} știri noi au fost adăugate cu succes!`);
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Eroare la inserarea știrilor:", err);
  }
};

seedNewData();

