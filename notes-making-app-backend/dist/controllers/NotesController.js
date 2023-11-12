"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNotes = exports.updateNotes = exports.removeNotes = exports.deleteEntireNotes = exports.addNotes = exports.createNewNote = void 0;
const NotesModel_1 = require("../model/NotesModel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createNewNote = async (req, res) => {
    const { userName, password } = req.body;
    const user = await NotesModel_1.NoteSchema.find({ userName });
    if (user.length !== 0) {
        if (!(await bcryptjs_1.default.compare(password, user[0].userPass))) {
            return res.status(201).json({ success: false, msg: "User Not Found" });
        }
        return res.status(200).json({ success: true, msg: "User Exists", user });
    }
    const salt = await bcryptjs_1.default.genSalt(10);
    const userPass = await bcryptjs_1.default.hash(password, salt);
    const notes = await NotesModel_1.NoteSchema.create({ userName, userPass });
    return res.status(201).json({ success: true, message: "You can create Your notes now", notes });
};
exports.createNewNote = createNewNote;
const addNotes = async (req, res) => {
    const id = req.params.id;
    const { notes } = req.body;
    const user = await NotesModel_1.NoteSchema.findById(id);
    if (!user) {
        return res.status(201).json({ success: false, msg: "User Not Found" });
    }
    user.notesArr.push(notes);
    await user.save();
    return res.status(200).json({ success: true, notes: user.notesArr });
};
exports.addNotes = addNotes;
const deleteEntireNotes = async (req, res) => {
    const id = req.params.id;
    const notes = await NotesModel_1.NoteSchema.findByIdAndDelete(id);
    //need to add tags adding functionality    
    if (!notes) {
        return res.status(404).json({ success: false, msg: "Notes not Found" });
    }
    return res.status(201).json({ success: true });
};
exports.deleteEntireNotes = deleteEntireNotes;
const removeNotes = async (req, res) => {
    const id = req.params.id;
    const notes = await NotesModel_1.NoteSchema.findById(id);
    if (!notes) {
        return res.status(404).json({ success: false, msg: "Notes not Found" });
    }
    const { index } = req.body;
    notes.notesArr.splice(index, 1);
    await notes.save();
    return res.status(200).json({ success: true, notes: notes.notesArr });
};
exports.removeNotes = removeNotes;
const updateNotes = async (req, res) => {
    const id = req.params.id;
    const notes = await NotesModel_1.NoteSchema.findById(id);
    if (!notes) {
        return res.status(404).json({ success: false, msg: "Notes not Found" });
    }
    const { index, updatedNotes } = req.body;
    notes.notesArr.splice(index, 1);
    await notes.save();
    notes.notesArr.push(updatedNotes);
    await notes.save();
    return res.status(200).json({ success: true, notes: notes.notesArr });
};
exports.updateNotes = updateNotes;
const getAllNotes = async (req, res) => {
    const id = req.params.id;
    const notes = await NotesModel_1.NoteSchema.findById(id);
    if (!notes) {
        return res.status(404).json({ success: false, msg: "Notes not Found" });
    }
    return res.status(200).json({ success: true, notes: notes.notesArr });
};
exports.getAllNotes = getAllNotes;
