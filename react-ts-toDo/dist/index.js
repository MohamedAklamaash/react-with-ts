"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoConnection_1 = __importDefault(require("./mongoConnection"));
const toDoRoutes_1 = __importDefault(require("./routes/toDoRoutes"));
(0, mongoConnection_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res, next) => {
    res.status(201).json({ success: true, msg: "On / route" });
});
app.use("/tasks", toDoRoutes_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
