import mongoose,{Schema,Document,Model} from "mongoose";

interface toDo{
    toDoArr:string[],
    readonly userName:string
}

// interface toDoDoc extends Document,toDo{

// }

// interface toDoModel extends Model<toDoDoc>{

// }

const toDoModel = new Schema<toDo>({
    userName:{
        type:String,
        default:""
    },
    toDoArr:{
        type:[String],
        default:[]
    }
})

export const toDoSchema = mongoose.model<toDo>("todo",toDoModel);
