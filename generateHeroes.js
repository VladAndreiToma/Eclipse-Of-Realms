// generateHeroes.js
const fs = require('fs');
const path = require('path');

// Calea către folderul cu imagini (client/public/heroes)
const folderPath = path.join(__dirname, 'client', 'public', 'heroes');

// Verificăm dacă folderul există
if (!fs.existsSync(folderPath)) {
    console.error("Folderul 'client/public/heroes' nu există!");
    process.exit(1);
}

// Citește toate fișierele din folder
const files = fs.readdirSync(folderPath);

// Construiește array-ul de eroi
const heroes = files
    .filter(file => /\.(webp|png|jpg|jpeg|gif)$/i.test(file)) // doar imagini
    .map((file, index) => {
        const nameWithoutExt = path.basename(file, path.extname(file));

        // Escape la apostrofuri pentru JS
        const safeName = nameWithoutExt.includes("'") ? nameWithoutExt.replace(/'/g, "\'") : nameWithoutExt;

        return {
            id: index + 1,
            name: safeName,
            thumbnail: `/heroes/${file}` // link relativ pentru React
        };
    });

// Scrie JSON-ul în același folder
const outputPath = path.join(folderPath, 'heroes.json');
fs.writeFileSync(outputPath, JSON.stringify(heroes, null, 4), 'utf8');

console.log(`heroes.json generat cu succes în: ${outputPath}`);
