// routes/notes.js
const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

// Create a new note
router.post('/', async (req, res) => {
  const { userId, title, body, tags, backgroundColor } = req.body;
  try {
    const note = new Note({ userId, title, body, tags, backgroundColor });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get all notes for a user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const notes = await Note.find({ userId });
    res.json(notes);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
