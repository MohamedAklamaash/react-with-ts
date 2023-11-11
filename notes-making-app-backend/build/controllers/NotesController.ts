import { Request, Response } from "express";
import { NoteSchema } from "../model/NotesModel";
interface UserDetails {
    userName: string;
    password: string;
}


type FuncType = (req: Request, res: Response) => Promise<Response>;

export const createNewNote: FuncType = async (req: Request, res: Response) => {
    const { userName, password }: UserDetails = req.body;
    await NoteSchema.create({ userName, userPass: password });
    return res.status(201).json({ success: true, message: "You can create Your notes now" });
};

export const addNotes: FuncType = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { notes }: { notes: string } = req.body;
    const user = await NoteSchema.findById(id);
    if (!user) {
        return res.status(201).json({ success: false, msg: "User Not Found" });
    }
    user.notesArr.push(notes);
    await user.save();
    return res.status(200).json({ success: true, notes: user.notesArr });
};

export const deleteEntireNotes: FuncType = async (req: Request, res: Response) => {
    const id = req.params.id;
    const notes = await NoteSchema.findByIdAndDelete(id);
    if (!notes) {
        return res.status(404).json({ success: false, msg: "Notes not Found" });
    }
    return res.status(201).json({ success: true });
};

export const removeNotes: FuncType = async (req: Request, res: Response) => {
    const id = req.params.id;
    const notes = await NoteSchema.findById(id);
    if (!notes) {
        return res.status(404).json({ success: false, msg: "Notes not Found" });
    }
    const { index }: { index: number } = req.body;
    notes.notesArr.splice(index, 1);
    await notes.save();
    return res.status(200).json({ success: true, notes: notes.notesArr });
};

export const updateNotes: FuncType = async (req: Request, res: Response) => {
    const id = req.params.id;
    const notes = await NoteSchema.findById(id);
    if (!notes) {
        return res.status(404).json({ success: false, msg: "Notes not Found" });
    }
    const { index, updatedNotes }: { index: number, updatedNotes: string } = req.body;
    notes.notesArr.splice(index, 1);
    await notes.save();
    notes.notesArr.push(updatedNotes);
    await notes.save();
    return res.status(200).json({ success: true, notes: notes.notesArr });
};

export const getAllNotes:FuncType = async (req: Request, res: Response)=>{
    const id = req.params.id;
    const notes = await NoteSchema.findById(id);
    if (!notes) {
        return res.status(404).json({ success: false, msg: "Notes not Found" });
    }    
    return res.status(200).json({ success: true, notes: notes.notesArr });
}
