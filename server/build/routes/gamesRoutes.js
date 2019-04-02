"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = __importDefault(require("../controllers/gamesControllers"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesControllers_1.default.list);
        this.router.get('/:id', gamesControllers_1.default.getOne);
        this.router.post('/', gamesControllers_1.default.create);
        this.router.delete('/:id', gamesControllers_1.default.delete);
        this.router.put('/:id', gamesControllers_1.default.update);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
