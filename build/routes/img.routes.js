"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_controller_1 = __importDefault(require("../controller/index.controller"));
var validation_controller_1 = require("../controller/validation.controller");
var imgRoutes = (0, express_1.default)();
imgRoutes.get('/images', (0, validation_controller_1.imageValidation)(), index_controller_1.default);
exports.default = imgRoutes;
