"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const NotesController_1 = require("../controllers/NotesController");
const router = express_1.default.Router();
router.route("/newUser").post(NotesController_1.createNewNote);
router.route("/deleteEntireNotes/:id").delete(NotesController_1.deleteEntireNotes);
router.route("/removeNotes/:id").put(NotesController_1.removeNotes);
router.route("/getNotes/:id").get(NotesController_1.getAllNotes);
router.route("/update/:id").put(NotesController_1.updateNotes);
router.route("/addnotes/:id").post(NotesController_1.addNotes);
module.exports = router;
