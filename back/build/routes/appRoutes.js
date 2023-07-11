"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AppRoutes = /** @class */ (function () {
    function AppRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    AppRoutes.prototype.config = function () {
        this.router.get('/', function (req, resp) { return resp.send('DesdeLaApp'); });
    };
    return AppRoutes;
}());
var appRoutes = new AppRoutes();
exports.default = appRoutes.router;
