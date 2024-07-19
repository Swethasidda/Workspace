const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  body: String,
  tags: [String],
  backgroundColor: String,
  archived: { type: Boolean, default: false },
  trashed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Note', NoteSchema);