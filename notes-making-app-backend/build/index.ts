import express,{Express, Request, Response} from "express";
import dotenv from "dotenv";
import mongoConnection from "./mongoConnection";
const app:Express = express();
const env:dotenv.DotenvConfigOutput = dotenv.config();
mongoConnection();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(5001,()=>{
    console.log(`Server is running on port 5001`);
})