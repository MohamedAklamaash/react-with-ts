import express, { Express, NextFunction,Response,Request } from 'express';
const app:Express = express();
import dotenv from "dotenv";
dotenv.config();
import mongoConnection from './mongoConnection';
import toDoRoutes from "./routes/toDoRoutes";
mongoConnection();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req:Request,res:Response,next:NextFunction)=>{
    res.status(201).json({success:true,msg:"On / route"})
})

app.use("/tasks",toDoRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})