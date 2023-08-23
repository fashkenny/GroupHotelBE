"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookModel = new mongoose_1.default.Schema({
    time: {
        type: String,
        required: true,
    },
    userId: {
        type: String
    },
    room: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "rooms"
    }
}, { timestamps: true });
exports.default = mongoose_1.default.model("books", bookModel);
