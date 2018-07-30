"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.listen(8080, function () {
    console.log("Example app listening on port 8080!");
});
//# sourceMappingURL=app.js.map