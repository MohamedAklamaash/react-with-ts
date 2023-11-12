import express, { Router } from "express";
import {addNotes, createNewNote, deleteEntireNotes, getAllNotes, removeNotes, updateNotes} from "../controllers/NotesController";
const router:Router = express.Router();

router.route("/newUser").post(createNewNote);
router.route("/deleteEntireNotes/:id").delete(deleteEntireNotes);
router.route("/removeNotes/:id").put(removeNotes);
router.route("/getNotes/:id").get(getAllNotes);
router.route("/update/:id").put(updateNotes);
router.route("/addnotes/:id").post(addNotes);

module.exports = router;