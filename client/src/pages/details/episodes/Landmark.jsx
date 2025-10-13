import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../../../components/navigation/NavBar";
import Footer from "../../Footer";

/* full landmarks data (each entry HAS world: 'Pyrothar' or 'Frostmere') */
const landmarks = [
  /* PYROTHAR */
  {
    pictureName: 'pyrothar-citadel1.webp',
    name: 'Ashen Citadel',
    world: 'Pyrothar',
    details: [
      { miniTitle: 'Terrain & Environment', description: 'Perched atop jagged volcanic cliffs, the Ashen Citadel looms over the molten plains of Pyrothar. Rivers of lava carve paths through obsidian rock, and sulfurous fumes hang heavy in the air. Narrow bridges of cooled magma connect the towering spires.' },
      { miniTitle: 'Recommended Combat Styles', description: 'Ranged Combat: Archers and flamethrowers can control choke points from high battlements.\nMelee Combat: Heavily armored warriors thrive in narrow corridors and central halls.\nStealth & Ambush: Rogues can navigate hidden tunnels and fissures to surprise foes.\nPyromancy: Fire mages can manipulate molten rivers and summon flame barriers to dominate the battlefield.' },
      { miniTitle: 'Loot & Resources', description: 'Molten ore and obsidian shards for crafting.\nWeapons forged in volcanic forges.\nRare potions resistant to fire and heat.\nRunic talismans hidden in tower vaults.' },
      { miniTitle: 'NPCs & Interactions', description: 'Vigilant ash knights patrolling the ramparts.\nScholars of fire magic studying molten phenomena.\nMerchants trading in rare volcanic minerals.\nAncient spirits bound to the citadel’s obsidian halls.' },
      { miniTitle: 'Lore & Atmosphere', description: 'The Ashen Citadel is a monument to Pyrothar’s enduring flame. Its spires have survived countless eruptions and battles. Legends tell of kings and sorcerers who commanded the lava rivers to defend their realm.' }
    ]
  },
  {
    pictureName: 'pyrothar-citadel2.webp',
    name: 'Ember Fortress',
    world: 'Pyrothar',
    details: [
      { miniTitle: 'Terrain & Environment', description: 'A fortress carved into a living volcano, Ember Fortress is surrounded by glowing magma channels and jagged obsidian walls. Heat waves distort the air, and ash rains from the molten peaks.' },
      { miniTitle: 'Recommended Combat Styles', description: 'Ranged Combat: Flaming arrows and siege engines dominate open lava plains.\nMelee in confined halls: Heavy fighters navigate narrow corridors.\nPyromancy: Fire mages can create walls of flame and molten traps.\nStealth: Assassins can slip through smoke-filled shadows and hidden passages.' },
      { miniTitle: 'Loot & Resources', description: 'Rare volcanic metals, Emberstones, enchanted fire crystals.\nHeat-resistant armor and weapons.\nHidden chests containing ancient scrolls and fiery potions.' },
      { miniTitle: 'NPCs & Interactions', description: 'Veteran flame knights defending the fortress.\nPyromancers honing their craft.\nNomadic traders seeking rare volcanic resources.\nSpirit guardians bound to molten shrines.' },
      { miniTitle: 'Lore & Atmosphere', description: 'Ember Fortress stands as a symbol of Pyrothar’s fury and resilience. Each hall echoes with the roar of lava, and every turret holds stories of legendary battles against invaders.' }
    ]
  },
  {
    pictureName: 'pyrothar-deserts.webp',
    name: 'Scorched Expanse',
    world: 'Pyrothar',
    details: [
      { miniTitle: 'Terrain & Environment', description: 'A vast desert of black sand and volcanic rock, the Scorched Expanse stretches across Pyrothar. Occasional magma fissures glow ominously, and heat waves warp the horizon.' },
      { miniTitle: 'Recommended Combat Styles', description: 'Ranged Combat: Longbowmen and pyromancers dominate open dunes.\nHit-and-run: Light cavalry or rogues can maneuver quickly across shifting sands.\nElemental Magic: Fire and heat-based magic is highly effective.' },
      { miniTitle: 'Loot & Resources', description: 'Obsidian shards, volcanic crystals, rare desert herbs.\nBuried treasure chests with gold, potions, and flame-infused weapons.' },
      { miniTitle: 'NPCs & Interactions', description: 'Nomadic desert tribes offering guidance or side quests.\nWandering merchants trading exotic items.\nRare desert beasts guarding hidden resources.' },
      { miniTitle: 'Lore & Atmosphere', description: 'The Scorched Expanse is a test of endurance. Travelers face relentless heat and shifting sands, but legends say hidden ruins hold treasures of Pyrothar’s ancient civilizations.' }
    ]
  },
  {
    pictureName: 'pyrothar-dungeon1.webp',
    name: 'Molten Catacombs',
    world: 'Pyrothar',
    details: [
      { miniTitle: 'Terrain & Environment', description: 'Beneath the volcanic surface lie the Molten Catacombs: tunnels of blackened rock and flowing magma veins. Flickering torchlight reveals ancient carvings and hidden traps.' },
      { miniTitle: 'Recommended Combat Styles', description: 'Close-quarters melee is essential.\nStealth & ambush: Rogues can use shadows and low corridors.\nElemental Magic: Fire magic can manipulate molten traps or clear paths.' },
      { miniTitle: 'Loot & Resources', description: 'Rare volcanic gems, enchanted weapons, and scrolls.\nHidden caches containing health and heat-resistance potions.' },
      { miniTitle: 'NPCs & Interactions', description: 'Guardians of the catacombs: lava elementals and fire spirits.\nOccasional alchemists or scholars exploring ancient Pyrothar secrets.' },
      { miniTitle: 'Lore & Atmosphere', description: 'The Molten Catacombs are said to be remnants of an ancient Pyrothar civilization. Heat and danger make every expedition a perilous adventure.' }
    ]
  },
  {
    pictureName: 'pyrothar-dungeon2.webp',
    name: 'Inferno Vaults',
    world: 'Pyrothar',
    details: [
      { miniTitle: 'Terrain & Environment', description: 'Deep underground vaults filled with flowing magma channels, stalactites of molten rock, and crumbling obsidian floors. The air is thick with sulfur.' },
      { miniTitle: 'Recommended Combat Styles', description: 'Melee combat in tight corridors.\nRanged attacks from elevated platforms.\nFire-based magic for area control and barrier creation.' },
      { miniTitle: 'Loot & Resources', description: 'Magma-forged weapons, rare ores, enchanted fire crystals.\nPotions enhancing resistance to heat or fire.' },
      { miniTitle: 'NPCs & Interactions', description: 'Lava elementals and infernal guardians.\nOccasional Pyrothar scholars documenting vault secrets.' },
      { miniTitle: 'Lore & Atmosphere', description: 'Inferno Vaults are ancient repositories of Pyrothar’s knowledge and power. Few dare to traverse their fiery halls, and those who do gain both riches and peril.' }
    ]
  },
  {
    pictureName: 'pyrothar-twin-vulcano-gate.webp',
    name: 'Twin Volcano Gate',
    world: 'Pyrothar',
    details: [
      { miniTitle: 'Terrain & Environment', description: 'Two towering volcanoes flank a massive stone gate, with rivers of lava flowing down their slopes. Ash clouds swirl constantly, and the ground trembles with seismic activity.' },
      { miniTitle: 'Recommended Combat Styles', description: 'Ranged combat from cliffs and ledges.\nClose-quarters melee in choke points near the gate.\nElemental magic: fire mages can summon lava barriers and traps.' },
      { miniTitle: 'Loot & Resources', description: 'Volcanic stones, enchanted magma crystals, rare weapons forged in lava.\nHidden chests behind lava flows with potions and runes.' },
      { miniTitle: 'NPCs & Interactions', description: 'Gatekeepers and flame spirits patrolling the area.\nNomadic Pyrothar tribes offering guidance or side quests.' },
      { miniTitle: 'Lore & Atmosphere', description: 'The Twin Volcano Gate serves as the main entrance to Pyrothar’s molten heart. It is a place of awe and danger, where the land itself seems alive with fire and fury.' }
    ]
  },

  /* FROSTMERE */
  {
    pictureName:'frostmere-big-mountain.webp',
    name:'ShiverFrost Summit',
    world: 'Frostmere',
    details: [
      { miniTitle: 'Terrain and Environment', description: 'ShiverFrost Summit rises proudly above all of Frostmere, with jagged, snow-covered peaks. Glacial winds cut through deep valleys and sharp ridges, while glaciers glitter under the cold sunlight. Snow-covered meadows and exposed rocks create unpredictable terrain, with fragile ice bridges and dangerous crevices.' },
      { miniTitle: 'Recommended Combat Styles', description: 'Ranged Combat: Archers and marksmen can take advantage of high positions for precise attacks.\nGuerrilla Tactics: Rogues and assassins can use crevices and rocks for ambushes.\nMelee in Tight Groups: Knights and heavy fighters excel in wider areas where there’s room to maneuver.\nElemental Magic: Ice mages or frost-wielders can manipulate the terrain and create ice barriers to control the battlefield.' },
      { miniTitle: 'Loot and Resources', description: 'Rare minerals from the glaciers: Frozium Crystals, White Obsidian, and Frozen Runestones.\nWeapons and armor with bonuses to cold resistance.\nHeat and healing potions hidden in cave recesses.' },
      { miniTitle: 'NPCs and Interactions', description: 'Nomadic mountain hunters offering quests and tips for safe paths.\nAncestral creatures: ice golems, snow wolves, and ancient wind spirits.' },
      { miniTitle: 'Lore and Atmosphere', description: 'ShiverFrost Summit is more than a battlefield; it’s a symbol of Frostmere’s endurance. Those who conquer the peak feel the pure power of ice and wind.' }
    ]
  },
  {
    pictureName:'frostmere-citadel.webp',
    name:'Mrinavjorn',
    world: 'Frostmere',
    details:[
      { miniTitle: "Terrain & Environment", description: "Perched on a jagged cliff overlooking icy valleys, Mrinavjorn rises as a fortress of ancient stone and frost. Towering spires, snow-dusted battlements, and frozen courtyards create a labyrinthine stronghold." },
      { miniTitle: "Recommended Combat Styles", description: "Siege & Ranged Combat: Archers and marksmen can hold the ramparts to control choke points.\nClose Quarters Melee: Heavy fighters and knights excel in corridors and courtyards.\nStealth & Ambush: Rogues can navigate hidden passages and snow-covered ledges to flank enemies." },
      { miniTitle: "Loot & Resources", description: "Ancient Frostmere weapons reinforced with enchanted ice crystals.\nArmors imbued with frost resistance.\nRare crafting ingredients: Frozen Iron Shards, Glacial Gems." },
      { miniTitle: "NPCs & Interactions", description: "Veteran frost knights patrolling the ramparts, offering guidance or quests.\nReclusive scholars studying arcane ice magic." },
      { miniTitle: "Lore & Atmosphere", description: "Mrinavjorn is not only a fortress but a symbol of Frostmere’s resilience. Its walls have withstood countless sieges." }
    ]
  },
  {
    pictureName: 'frostmere-eternal-cave.webp',
    name: 'Crystal Hollow',
    world: 'Frostmere',
    details: [
      { miniTitle: 'Terrain & Environment', description: 'Crystal Hollow is a sprawling ice cavern beneath Frostmere’s peaks. Stalactites of pure ice hang from the ceiling, and frozen waterfalls create slippery surfaces.' },
      { miniTitle: 'Recommended Combat Styles', description: 'Close-quarters melee: swords and axes are effective in narrow tunnels.\nStealth & Traps: Rogues can use the shadows and uneven terrain for ambushes.' },
      { miniTitle: 'Loot & Resources', description: 'Glacial crystals for crafting.\nRare fungi and frost herbs.\nTreasure chests hidden behind frozen doors.' },
      { miniTitle: 'NPCs & Interactions', description: 'Hermit alchemists studying ice magic.\nSpirit guardians of the cavern.' },
      { miniTitle: 'Lore & Atmosphere', description: 'Crystal Hollow is said to be a resting place of ancient frost spirits. Its shimmering walls evoke both wonder and danger.' }
    ]
  },
  {
    pictureName: 'frostmere-ice-arena.webp',
    name: 'Permafrost Pit',
    world: 'Frostmere',
    details: [
      { miniTitle: 'Terrain & Environment', description: 'Permafrost Pit is a vast open arena carved into the frozen tundra. Icy plains, frost-covered rocks, and occasional snow drifts create a harsh, open battlefield.' },
      { miniTitle: 'Recommended Combat Styles', description: 'Ranged Combat: Archers and spellcasters excel in the open spaces.\nMelee in groups: Knights and warriors can dominate wide plains.' },
      { miniTitle: 'Loot & Resources', description: 'Frozen weapon caches.\nMagical ice relics.\nPotions hidden under snow drifts.' },
      { miniTitle: 'NPCs & Interactions', description: 'Arena champions offering duels.\nTraveling merchants with rare equipment.' },
      { miniTitle: 'Lore & Atmosphere', description: 'Permafrost Pit has been the site of countless duels and military drills. The echoes of past battles resonate through the icy air.' }
    ]
  },
  {
    pictureName: 'frostmere-rift.webp',
    name: 'Glacier Tear',
    world: 'Frostmere',
    details: [
      { miniTitle: 'Terrain & Environment', description: 'Glacier Tear is a deep rift splitting Frostmere’s glaciers. Sheer ice walls rise on both sides, and hidden crevices provide both danger and tactical advantage.' },
      { miniTitle: 'Recommended Combat Styles', description: 'Ranged combat from high ledges.\nStealth and ambush in crevices.\nElemental ice magic to manipulate terrain and slow enemies.' },
      { miniTitle: 'Loot & Resources', description: 'Rare ice shards and glacial minerals.\nTreasure caches hidden in rift edges.' },
      { miniTitle: 'NPCs & Interactions', description: 'Nomadic scouts monitoring the rift.\nIce elementals and frost spirits defending hidden secrets.' },
      { miniTitle: 'Lore & Atmosphere', description: 'Glacier Tear is a place of peril and legend. Adventurers who navigate its icy chasms speak of both the dangers and awe-inspiring vistas.' }
    ]
  }
];

const slugify = (s = "") => s.toLowerCase().trim().replace(/\s+/g, '-');

export default function LandmarkPage() {
  const { landmark } = useParams(); // route param :landmark
  const navigate = useNavigate();

  const found = landmarks.find(l => slugify(l.name) === landmark);

  if (!found) {
    return (
      <div style={{ color: "white", backgroundColor: "#111", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <NavBar />
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: '11vh' }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#fff", fontFamily: "Cinzel Decorative" }}>Landmark not found</h1>
            <button onClick={() => navigate(-1)} style={{ marginTop: 16, padding: "0.6rem 1.1rem", cursor: "pointer", borderRadius: 6 }}>Go back</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const isPyro = found.world && found.world.toLowerCase() === "pyrothar";
  const titleBackdrop = isPyro
    ? "linear-gradient(180deg, rgba(255,120,40,0.12), rgba(120,20,10,0.06))"
    : "linear-gradient(180deg, rgba(160,230,255,0.12), rgba(60,140,255,0.06))";

  const detailBg = isPyro
    ? "linear-gradient(135deg, rgba(255,69,0,0.06), rgba(255,140,0,0.04))"
    : "linear-gradient(135deg, rgba(180,220,255,0.06), rgba(120,190,255,0.04))";

  const detailShadow = isPyro ? '0 8px 24px rgba(150,60,10,0.18)' : '0 8px 24px rgba(10,60,120,0.12)';

  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "white", minHeight: "100vh" }}>
      <NavBar />
      <div style={{ paddingTop: '11vh', boxSizing: 'border-box' }}>
        {/* hero */}
        <div style={{ background: isPyro ? 'linear-gradient(100deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 42%, rgba(50,20,0,0.7) 50%, rgba(255,80,30,0.5) 70% , rgba(255,140,0,0.2) 100% )':'linear-gradient(100deg, rgba(0,0,0,1) 0% , rgba(0,0,0,1) 42%, rgba(50,80,200,0.7) 50% , rgba(100,160,255,0.5) 70%, rgba(180,220,255,0.2) 100%)', height:'85vh', width:'100%', display:"flex", flexDirection:"row",
          justifyContent:"center", boxSizing:"border-box", padding:'2rem 4rem'}}> 
          <div style={{background:'linear-gradient(to-bottom, #111 0%, rgba(0,0,0,0) 2%)', position:"absolute", bottom:'0rem', width:'100%', height:'5vh', zIndex:'100'}}/>
          <div style={{minWidth:'50%',height:'100%', fontFamily:'Cinzel Decorative', fontSize:'3.5rem', fontWeight:'900', alignItems:"center",display:"flex"}}>
            {found.name}
          </div>
          <div style={{flex: 1,backgroundImage: `url('/pics/worlds/${found.world}/${found.pictureName}')`,
          backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',borderRadius: '1rem',maxWidth:'48%' , maxHeight:'98%'}}/>
        </div>

        {/* details (compact stacked rows) */}
        <div style={{ width: '100%', maxWidth: 1200, margin: '1.5rem auto', padding: '0 4%', boxSizing: 'border-box', fontFamily: 'Goudy Bookletter 1911, serif' }}>
          {found.details.map((section, idx) => (
            <div key={idx} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              marginBottom: 12,
              padding: '0.9rem 1rem',
              borderRadius: 10,
              background: detailBg,
              boxShadow: detailShadow,
              border: isPyro ? '1px solid rgba(255,120,0,0.04)' : '1px solid rgba(100,170,255,0.03)'
            }}>
              <div style={{ fontSize: 18, fontWeight: 800 }}>{section.miniTitle}</div>
              <div style={{ fontSize: 15, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{section.description}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
