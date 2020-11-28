"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = __importDefault(require("./todo"));
const prefix = '/api/v1';
const todoRoutes = todo_1.default(prefix);
function setupRoutes(app) {
    todoRoutes(app);
}
exports.default = setupRoutes;
