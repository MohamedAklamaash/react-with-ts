"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const toDoControllers_1 = require("../controllers/toDoControllers");
const router = express_1.default.Router();
router.route("/createTodo").post(toDoControllers_1.createTask);
router.route("/addToDo").post(toDoControllers_1.addTask);
router.route("/removeToDo").put(toDoControllers_1.removeTask);
router.route("/getAllTasks").get(toDoControllers_1.getTasks);
router.route("/deleteAllTasks").delete(toDoControllers_1.deleteEntireTask);
exports.default = router;
