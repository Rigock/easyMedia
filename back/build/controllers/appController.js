"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appController = void 0;
var database_1 = __importDefault(require("../database"));
var AppController = /** @class */ (function () {
    function AppController() {
    }
    AppController.prototype.index = function (req, res) {
        database_1.default.get('query');
        res.send('Desde la app');
    };
    return AppController;
}());
exports.appController = new AppController();
exports.default = exports.appController;
