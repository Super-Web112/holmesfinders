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
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./src/db"));
const routes_1 = __importDefault(require("./src/routes"));
dotenv_1.default.config();
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.options('*', cors_1.default());
routes_1.default(app);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default();
    let port = parseInt(process.env.LISTEN_PORT || '', 10);
    if (!port || port < 0 || port > 65535) {
        port = 3000;
    }
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});
main();
