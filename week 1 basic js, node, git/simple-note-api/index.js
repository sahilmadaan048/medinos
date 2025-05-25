const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;

app.use(express.json());

const FILE_PATH = './notes.json';

// load notes
function loadNotes() {
    if (!fs.existsSync(FILE_PATH)) return [];
    const data = fs.readFileSync(FILE_PATH);
    return JSON.parse(data || '[]');
}

// save notes
function saveNotes(notes) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(notes, null, 2));
}

// create a note
app.post('/notes', (req, res) => {
    const { title, content } = req.body;
    const notes = loadNotes();
    const newNote = { id: uuidv4(), title, content };
    notes.push(newNote);
    saveNotes(notes);
    res.status(201).json(newNote);
});

// get all notes
app.get('/notes', (req, res) => {
    const notes = loadNotes();
    res.json(notes);
});

// delete a note
app.delete('/notes/:id', (req, res) => {
    const notes = loadNotes();
    const updatedNotes = notes.filter(note => note.id !== req.params.id);

    if (notes.length === updatedNotes.length) {
        return res.status(404).json({ error: 'Note not found' });
    }

    saveNotes(updatedNotes);
    res.json({ message: 'Note deleted' });
});

// start server
app.listen(port, () => {
    console.log(`Note API running on http://localhost:${port}`);
});
