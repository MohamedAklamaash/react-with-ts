import mongoose from "mongoose";

const TagsModal = new mongoose.Schema({
    notesId:{
        type:mongoose.Types.ObjectId,
    },
    tags:{
        type:[String],
        default:[]
    }
})

export const TagSchema = mongoose.model("tags",TagsModal);