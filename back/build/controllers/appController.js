"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appController = void 0;
var AppController = /** @class */ (function () {
    function AppController() {
    }
    AppController.prototype.list = function (req, res) {
        res.json({ text: 'Showing posts' });
    };
    AppController.prototype.getOne = function (req, res) {
        res.json({ text: 'Showing post: ' + req.params.id });
    };
    AppController.prototype.create = function (req, res) {
        res.json({ text: 'Creating a post' });
    };
    AppController.prototype.update = function (req, res) {
        res.json({ text: 'Updating post: ' + req.params.id });
    };
    AppController.prototype.delete = function (req, res) {
        res.json({ text: 'Deleting post: ' + req.params.id });
    };
    return AppController;
}());
exports.appController = new AppController();
exports.default = exports.appController;
