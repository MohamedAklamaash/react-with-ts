import mongoose from "mongoose";

const mongoConnection = async()=>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@notes.jfiwfzz.mongodb.net/notes?retryWrites=true&w=majority`)
        console.log("MongoDb is connected");
        
    } catch (error) {
        console.log("Db is not connected");
        
    }
}

export default mongoConnection;