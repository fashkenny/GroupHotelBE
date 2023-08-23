"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const URL = "process.env.DB"
const dbConnect = () => {
    mongoose_1.default.connect(process.env.DB).then(() => {
        console.log("Connected to database");
    });
};
exports.dbConnect = dbConnect;