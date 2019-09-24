const notes = {};
const Note = require('../models/Note')
notes.get = async(req, res) => {
    const notes = await Note.find();
    res.json(notes)
};
notes.getId = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};
notes.post = async(req, res) => {
    const { title, content, date, author } = req.body;
    const note = new Note({
        title: title,
        content: content,
        date,
        author: author
    })
    await note.save();
    res.json({ message: 'note saved' });
};
notes.put = async(req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: 'note updated' });
};
notes.remove = async (req, res) => {
    const note = await Note.findByIdAndRemove(req.params.id);
    res.json({ message: 'note removed' });
};
module.exports = notes;