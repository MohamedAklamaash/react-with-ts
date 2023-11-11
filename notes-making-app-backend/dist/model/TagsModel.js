"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TagsModal = new mongoose_1.default.Schema({
    notesId: {
        type: mongoose_1.default.Types.ObjectId,
    },
    tags: {
        type: [String],
        default: []
    }
});
exports.TagSchema = mongoose_1.default.model("tags", TagsModal);
