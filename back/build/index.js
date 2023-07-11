"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
var appRoutes_1 = __importDefault(require("./routes/appRoutes"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
    };
    Server.prototype.routes = function () {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/easyMedia', appRoutes_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('Server on PORT: ', _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
