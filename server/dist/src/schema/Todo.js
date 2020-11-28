"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const TodoSchema = new mongoose_1.Schema({
    description: String,
    done: Boolean,
}, {
    toJSON: { versionKey: false },
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
});
TodoSchema.plugin(mongoose_paginate_v2_1.default);
const Todo = mongoose_1.model('Todo', TodoSchema);
exports.default = Todo;
