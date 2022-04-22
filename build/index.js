"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var img_routes_1 = __importDefault(require("./routes/img.routes"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/api', img_routes_1.default);
app.listen(port, function () {
    console.log("server is up and running in port ".concat(port));
});
