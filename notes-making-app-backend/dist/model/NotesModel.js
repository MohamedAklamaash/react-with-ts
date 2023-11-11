"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const NotesModal = new mongoose_1.default.Schema({
    userName: {
        type: String,
        default: "",
        required: true
    },
    notesArr: {
        type: [String],
        default: [],
    },
    userPass: {
        type: String,
        required: true
    }
});
exports.NoteSchema = mongoose_1.default.model("Notes", NotesModal);
