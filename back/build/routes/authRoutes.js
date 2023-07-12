"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
var passport_1 = __importDefault(require("passport"));
var AuthRoutes = /** @class */ (function () {
    function AuthRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    AuthRoutes.prototype.config = function () {
        this.router.get('/', authController_1.atuhController.signUp);
        // this.router.post('/', atuhController.postSignUp);
        this.router.post('/', passport_1.default.authenticate('local.signup', {
            successRedirect: '/profile',
            failureRedirect: '/signup',
            failureFlash: true
        }));
        this.router.get('/profile', authController_1.atuhController.profile);
    };
    return AuthRoutes;
}());
var authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
