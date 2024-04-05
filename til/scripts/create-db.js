
// parse all files under ../notes folder and parse their yaml front matters metadata and md and create json file and save it to public folder

const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');

const notesDir = path.join(__dirname, '../notes');

const notes = fs.readdirSync(notesDir);

const notesData = notes.map(note => {
    const notePath = path.join(notesDir, note);
    const noteContent = fs.readFileSync(notePath, 'utf8');
    const noteData = yamlFront.loadFront(noteContent, {
        contentKeyName: 'content'
    });
    noteData.slug = note.replace('.md', '');
    return noteData;
})

// save the notesData to public folder
const publicDir = path.join(__dirname, '../public');
const notesDataPath = path.join(publicDir, 'db.json');
fs.writeFileSync(notesDataPath, JSON.stringify(notesData, null, 2));


