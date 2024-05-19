"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("../database/config/db"));
var router_1 = __importDefault(require("./router"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
(0, db_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', router_1.default);
app.listen(4000, function () { return console.log('Server running on port 4000'); });
