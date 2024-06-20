"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stars = void 0;
const react_1 = __importDefault(require("react"));
const Star_1 = require("../Star/Star");
require("./stars.module.css");
const Stars = (count) => {
    let view;
    if (typeof count == 'number' && 0 < count && count < 6) {
        view = true;
    }
    else {
        view = false;
    }
    return (react_1.default.createElement("ul", { className: "card-body-stars" },
        react_1.default.createElement("li", null, view && Array(count).fill('').map((_, i) => react_1.default.createElement(Star_1.Star, { key: i })))));
};
exports.Stars = Stars;
