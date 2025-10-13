import mongoose from "mongoose";
import dotenv from "dotenv";
import News from "./src/models/News.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB conectata"))
    .catch(err => console.error(err));

const newsData = [
  {
    title: "Faster PvP Lobbies – The Race of Realms",
    story: "After weeks of testing, the dev team has successfully reduced waiting times in PvP lobbies. Players can now jump instantly into competitive matches across Frostmere, Pyrothar, or Noctryll. Kar'Li Morivelle, known for her incredible speed and infiltration tactics, personally tested the new lobbies and said: 'It’s like the whole world opens instantly for adventure.' Every duel now feels more dynamic, intense, and engaging, offering players the chance to experiment with complex strategies and unexpected collaborations. The fast lobbies are optimized to minimize lag and maintain balance across all hero classes.",
    description: "Faster PvP gameplay – enter matches instantly, test your strategies, and coordinate with your team.",
    category: "pvp",
    createdAt: new Date()
  },
  {
    title: "Pyrothar Expansion – The Infernal Arena",
    story: "In the heart of Pyrothar, the lava fields expand, creating new challenges for adventurers. The hero Pyrrathiel discovered a special armor forged in the central fire of the realm, allowing absorption of fiery energy and unleashing waves of flames on enemies. Kar'Li Morivelle and DuskVeil participated in field tests, confronting lava, scorching rocks, and fierce creatures. The new armor and weapon sets are balanced to provide both offense and defense, turning every fight into a spectacular dance of fire and shadow.",
    description: "Explore Pyrothar, discover fire-forged armor, and face dangerous creatures in the new arena.",
    category: "hero",
    createdAt: new Date()
  },
  {
    title: "Frostmere Questlines – Shadows on Ice",
    story: "Frostmere is no longer just a frozen land—it now hides temples buried under snow, portals to icy realms, and puzzles that test both mind and reflexes. DuskVeil, the shadow master, and Kar'Li Morivelle discovered an ancient crystal that amplifies stealth and magic abilities. Beyond traditional equipment, players can now obtain new magical weapons that control ice and water, offering unique strategies in combat. The new questlines provide both solo challenges and co-op experiences, with rare rewards and rich lore.",
    description: "New content in Frostmere: quests, hidden portals, and magical weapons for the bravest heroes.",
    category: "realm",
    createdAt: new Date()
  },
  {
  title: "Shadowveil Reborn – The Return of the Night Blades",
  story: "After centuries of silence, the Night Blades return to Shadowveil. Their secret guild halls are opening once again to those who dare master the art of silent assassination and elemental shadows. The new faction introduces stealth-based mechanics, enhanced invisibility, and critical strike abilities that scale with moonlight cycles. Players aligned with the Night Blades gain access to exclusive contracts and shadow-forged gear.",
  description: "Join the Night Blades faction and explore new stealth mechanics and shadow missions.",
  category: "realm",
  createdAt: new Date()
},
{
  title: "Trade Routes Unlocked – The Golden Expanse Opens",
  story: "Merchants rejoice! The Golden Expanse has finally become accessible, allowing trade routes between Frostmere and Pyrothar. Guilds can now establish caravans and compete for lucrative trading contracts. The economy system introduces real-time supply and demand, making every transaction strategic. Guard your cargo well—bandits and rival guilds are on the prowl.",
  description: "Open trading between realms with new economic systems and caravan missions.",
  category: "update",
  createdAt: new Date()
},
{
  title: "Hero Spotlight – Kar’Li Morivelle’s Origins",
  story: "Born in the undercity of Noctryll, Kar’Li Morivelle rose from obscurity to become one of the fastest duelists in recorded history. The new hero spotlight reveals unseen lore, her training under the Shadow Masters, and how she forged alliances across three realms. A cinematic quest chain now allows players to relive her early missions and unlock the 'Echo Step' ability.",
  description: "New cinematic questline exploring the origins of Kar’Li Morivelle.",
  category: "hero",
  createdAt: new Date()
},
{
  title: "The Great Balance Patch – All Realms Updated",
  story: "Following months of testing, a massive balance patch has been deployed. Mage spells scale more efficiently, rogue energy regen has been improved, and PvP arenas now feature dynamic environmental effects. The update also includes reworked hero talents, improved matchmaking, and performance boosts across all systems.",
  description: "Major gameplay balance update improving PvP and PvE combat flow.",
  category: "update",
  createdAt: new Date()
},
{
  title: "Skyforge Event – The Awakening of Titans",
  story: "Celestial gates have opened above the skies of Noctryll, releasing the ancient Titans back into the world. Players can band together in massive co-op events to repel these skybound giants and earn divine relics. Each Titan offers unique mechanics, loot pools, and world-altering consequences if left undefeated.",
  description: "Epic co-op world event featuring Titans and divine loot.",
  category: "event",
  createdAt: new Date()
},
{
  title: "Frostmere Arena Championship Announced",
  story: "The Frostmere Arena will host the first inter-realm championship. Players can register as solo combatants or teams of three to compete for legendary rewards. Spectator mode will stream real-time battles, and top-ranked champions will be immortalized in the Hall of Valor.",
  description: "Join the first realm-wide PvP tournament in Frostmere Arena.",
  category: "pvp",
  createdAt: new Date()
},
{
  title: "Patch 1.2.9 – UI Enhancements and Performance Gains",
  story: "User interface overhaul improves clarity, reduces input lag, and enhances readability during combat. The performance team achieved a 40% FPS boost on mid-tier systems, making large-scale battles smoother than ever. The new HUD customization system lets players rearrange spellbars, map placement, and ally frames.",
  description: "Visual and performance improvements in Patch 1.2.9.",
  category: "system",
  createdAt: new Date()
},
{
  title: "Alchemy System Expanded – Potions of Reality Bending",
  story: "The alchemy discipline has evolved, allowing skilled players to craft potions that alter physics itself. From slowing time to amplifying perception, these concoctions redefine strategic combat. Alchemists can now trade rare ingredients from Pyrothar’s volcanic plains and Frostmere’s frozen caves.",
  description: "Advanced alchemy system introduces time-altering potions and realm-exclusive ingredients.",
  category: "update",
  createdAt: new Date()
},
{
  title: "The Vaults of Eternity Discovered Beneath Noctryll",
  story: "Explorers have unearthed a forgotten labyrinth under Noctryll. The Vaults of Eternity contain ancient machinery, echoing energy, and relics that predate all known realms. Teams that dare descend face shifting corridors, illusion-based puzzles, and a timeless guardian rumored to grant one wish per century.",
  description: "New dungeon beneath Noctryll featuring advanced puzzles and rare relics.",
  category: "realm",
  createdAt: new Date()
},
{
  title: "Global Server Maintenance & Realm Migration Notice",
  story: "To ensure stability and accommodate the massive player influx, realm servers will undergo scheduled maintenance. Migration tools will allow players to transfer data between Frostmere, Pyrothar, and Noctryll with minimal downtime. The update also enhances global latency management for cross-realm events.",
  description: "Scheduled maintenance improving stability and realm transfers.",
  category: "system",
  createdAt: new Date()
}
];



const seedNews = async () => {
  try {
    // Șterge toate știrile existente
    await News.deleteMany({});
    console.log("Știrile vechi au fost șterse");

    // Inserează noile știri
    await News.insertMany(newsData);
    console.log("Știrile noi au fost inserate");

    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
};

seedNews();