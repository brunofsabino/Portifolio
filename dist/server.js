"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const api_1 = __importDefault(require("./routes/api"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.engine('mustache', (0, mustache_express_1.default)());
app.set('view engine', 'mustache');
app.set('views', path_1.default.join(__dirname, 'views'));
app.use(index_1.default);
app.use('/api', api_1.default);
app.listen(process.env.PORT, () => {
    console.log("RODANDO SERVIDOR NA PORTA: " + process.env.PORT);
});
