"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodb = exports.JWTT_PASSWORD = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.JWTT_PASSWORD = process.env.JWT_PASSWORD;
exports.mongodb = process.env.MONGODB_URL;
