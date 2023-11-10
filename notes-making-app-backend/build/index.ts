import express,{Express, Request, Response} from "express";
import dotenv from "dotenv";
const app:Express = express();
const env:dotenv.DotenvConfigOutput = dotenv.config();



app.listen(5001,()=>{
    console.log(`Server is running on port 5001`);
})