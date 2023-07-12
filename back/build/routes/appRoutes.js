"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appController_1 = require("../controllers/appController");
var AppRoutes = /** @class */ (function () {
    function AppRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    AppRoutes.prototype.config = function () {
        this.router.get('/', appController_1.appController.list);
        this.router.get('/:id', appController_1.appController.getOne);
        this.router.post('/', appController_1.appController.create);
        this.router.put('/:id', appController_1.appController.update);
        this.router.delete('/:id', appController_1.appController.delete);
    };
    return AppRoutes;
}());
var appRoutes = new AppRoutes();
exports.default = appRoutes.router;
