import mongoose from "mongoose";

const NotesModal = new mongoose.Schema({
    userName:{
        type:String,
        default:"",
        required:true
    },
    notesArr:{
        type:Array<string>,
        default:[]
    },
    userPass:{
        type:String,
        required:true
    }
})

export const NoteSchema = mongoose.model("Notes",NotesModal);