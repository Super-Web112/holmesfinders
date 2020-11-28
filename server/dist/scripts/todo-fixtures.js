"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lorem_ipsum_1 = require("lorem-ipsum");
const db_1 = __importDefault(require("../src/db"));
const Todo_1 = __importDefault(require("../src/schema/Todo"));
function main() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let todoCount = 100;
        const argCount = parseInt((_a = process.env.npm_config_todo_count) !== null && _a !== void 0 ? _a : '', 10);
        if (argCount > 0) {
            todoCount = argCount;
        }
        const mongoose = yield db_1.default();
        const lorem = new lorem_ipsum_1.LoremIpsum();
        const items = [...(new Array(todoCount))].map(() => ({
            description: lorem.generateSentences(1),
            done: Math.random() > 0.75,
        }));
        yield Todo_1.default.insertMany(items);
        mongoose.disconnect();
        console.log(`Inserted ${todoCount} ToDo items.`);
    });
}
main();
