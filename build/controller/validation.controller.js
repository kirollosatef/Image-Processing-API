"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageValidation = void 0;
var express_validator_1 = require("express-validator");
var imagePath_controllor_1 = require("./imagePath.controllor");
var imageValidation = function () { return [
    (0, express_validator_1.query)('width')
        .exists()
        .withMessage('width is required')
        .toInt()
        .isInt({ max: 1080 })
        .withMessage('The max width should be 1000'),
    (0, express_validator_1.query)('height')
        .exists()
        .withMessage('Image height is required')
        .toInt()
        .isInt({ max: 1080 })
        .withMessage('The max height should be 1000'),
    (0, express_validator_1.query)('filename')
        .exists()
        .withMessage('Image name is required')
        .isIn(imagePath_controllor_1.images)
        .withMessage('The image is not exist'),
]; };
exports.imageValidation = imageValidation;
