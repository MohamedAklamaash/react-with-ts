"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoConnection = async () => {
    try {
        await mongoose_1.default.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@todo.p9cj1vu.mongodb.net/toDo?retryWrites=true&w=majority`);
        console.log("MongoDB is Connected");
    }
    catch (error) {
        console.log("MongoDB is disconnected");
    }
};
exports.default = mongoConnection;
