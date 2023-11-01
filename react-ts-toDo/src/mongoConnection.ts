import mongoose from "mongoose";

const mongoConnection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@todo.p9cj1vu.mongodb.net/toDo?retryWrites=true&w=majority`);
        console.log("MongoDB is Connected");
    } catch (error) {
        console.log("MongoDB is disconnected");
    }
}
export default mongoConnection;