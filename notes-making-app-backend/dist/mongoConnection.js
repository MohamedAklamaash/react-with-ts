"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoConnection = async () => {
    try {
        await mongoose_1.default.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@notes.jfiwfzz.mongodb.net/notes?retryWrites=true&w=majority`);
        console.log("MongoDb is connected");
    }
    catch (error) {
        console.log("Db is not connected");
    }
};
exports.default = mongoConnection;
