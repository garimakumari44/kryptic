"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMiddleware = void 0;
require('dotenv').config();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const UserMiddleware = (req, res, next) => {
    const header = req.headers['authorization'];
    const decoded = jsonwebtoken_1.default.verify(header, config_1.JWTT_PASSWORD);
    if (decoded) {
        // @ts-ignore
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: 'failed to verify'
        });
    }
};
exports.UserMiddleware = UserMiddleware;
