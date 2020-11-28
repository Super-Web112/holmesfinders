"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function dbConnect() {
    // if (!process.env.DB_CONNECT_URI) {
    //   console.error('Missing required config option: DB_CONNECT_URI');
    //   process.exit(1);
    // }
    // return mongoose.connect(process.env.DB_CONNECT_URI, {
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true,
    // });
    return mongoose_1.default.connect('mongodb://localhost:27017/todo-bitpanda', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
}
exports.default = dbConnect;
