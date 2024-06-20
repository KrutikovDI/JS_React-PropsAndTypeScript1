"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Star = void 0;
const react_1 = __importDefault(require("react"));
const Star = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("svg", { fill: "#D3BCA2", height: "28", viewBox: "0 0 18 18", width: "28", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" }),
            react_1.default.createElement("path", { d: "M0 0h18v18H0z", fill: "none" }))));
};
exports.Star = Star;
