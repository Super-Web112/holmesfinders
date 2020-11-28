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
const pagination_config_1 = require("../schema/pagination-config");
const Todo_1 = __importDefault(require("../schema/Todo"));
function escapeRegex(input) {
    // eslint-disable-next-line no-useless-escape
    return input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
const getPaginationOptions = (query) => {
    var _a;
    const getQueryOption = (name) => {
        const option = query[name];
        if (Array.isArray(option))
            return undefined;
        if (typeof option !== 'string')
            return undefined;
        return parseInt(option, 10);
    };
    const limitValue = (_a = getQueryOption('limit')) !== null && _a !== void 0 ? _a : pagination_config_1.defaultValues.limit;
    const offsetValue = getQueryOption('offset');
    return Object.assign(Object.assign({}, (limitValue !== undefined && { limit: limitValue })), (offsetValue !== undefined && { offset: offsetValue }));
};
const setupRoutes = (prefix) => (app) => {
    const url = `${prefix}/todo`;
    app.get(url, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // const { description, done } = req.query;
        // const descriptionRegex = new RegExp(escapeRegex(String(description)), 'i');
        // const filter = {
        //   ...(done !== undefined && { done: done === 'true' }),
        //   ...(description !== undefined && { description: descriptionRegex }),
        // };
        // const paginationOptions = {
        //   ...getPaginationOptions(req.query),
        //   customLabels: paginationLabels,
        // };
        // const todoItems = await Todo.paginate(filter, paginationOptions);
        // // console.log(todoItems.items)
        Todo_1.default.find(function (err, response) {
            res.json(response);
        });
        // res.send(todoItems.items);
    }));
    app.get(`${url}/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const todoItem = yield Todo_1.default.findById(id);
        res.send(todoItem);
    }));
    app.delete(url, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield Todo_1.default.deleteMany({});
        res.status(204).end();
    }));
    app.delete(`${url}/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        // console.log(req.params)
        yield Todo_1.default.findByIdAndDelete(id);
        Todo_1.default.find(function (err, response) {
            res.json(response);
        });
        // res.status(204).end();
    }));
    app.post(url, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const todoItem = new Todo_1.default({
            description: req.body.description,
            done: false,
        });
        yield todoItem.save();
        Todo_1.default.find(function (err, response) {
            res.json(response);
        });
        // res.send(todoItem);
    }));
    app.put(`${url}/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { description, done } = req.body;
        const update = Object.assign(Object.assign({}, (description !== undefined && { description })), (done !== undefined && { done }));
        const todoItem = yield Todo_1.default.findByIdAndUpdate(req.params.id, {
            $set: update,
        }, { new: true });
        Todo_1.default.find(function (err, response) {
            res.json(response);
        });
        // res.send(todoItem);
    }));
};
exports.default = setupRoutes;
