"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const port = 3000;
// Connect to MongoDB Atlas
(0, db_1.default)();
// Middleware to parse JSON
app.use(express_1.default.json());
// Basic route
app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
