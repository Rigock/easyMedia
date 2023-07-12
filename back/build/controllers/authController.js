"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atuhController = void 0;
var passport_1 = __importDefault(require("passport"));
// const passport = require('../lib/passport');
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.profile = function (req, res) {
        console.log('Desde el PROFILE');
        res.json({ text: 'Desde el PROFILE ' });
    };
    AuthController.prototype.signUp = function (req, res) {
        console.log('Desde el signUp');
        res.json({ text: 'Desde el SIGN UP ' });
    };
    AuthController.prototype.postSignUp = function (req, res) {
        // console.log('el bodA: ', req.body);
        passport_1.default.authenticate('local.signup', {
            successRedirect: '/profile',
            failureRedirect: '/signup',
            failureFlash: true
        });
        res.send('RECEIVED');
    };
    return AuthController;
}());
exports.atuhController = new AuthController();
exports.default = exports.atuhController;
