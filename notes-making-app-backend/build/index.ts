import express,{Express, Request, Response} from "express";
import dotenv from "dotenv";
import mongoConnection from "./mongoConnection";
const app:Express = express();
dotenv.config();
const notesRote = require("./routes/NotesRoutes");
mongoConnection();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/notes",notesRote);
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})