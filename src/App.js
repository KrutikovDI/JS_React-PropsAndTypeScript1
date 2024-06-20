"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stars_1 = require("./components/Stars/Stars");
require("./App.css");
const react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Stars_1.Stars, { count: 2 })));
}
exports.default = App;
