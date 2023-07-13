"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
var AuthRoutes = /** @class */ (function () {
    function AuthRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    AuthRoutes.prototype.config = function () {
        this.router.get('/:email', authController_1.atuhController.getUser);
        this.router.post('/', authController_1.atuhController.createUser);
        // this.router.post('/', passport.authenticate('local.signup', {
        //     successRedirect: '/profile',
        //     failureRedirect: '/signup',
        //     failureFlash: true
        // }));
        this.router.get('/profile', authController_1.atuhController.profile);
    };
    return AuthRoutes;
}());
var authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
