"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoConnection_1 = __importDefault(require("./mongoConnection"));
const app = (0, express_1.default)();
const env = dotenv_1.default.config();
(0, mongoConnection_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(5001, () => {
    console.log(`Server is running on port 5001`);
});
