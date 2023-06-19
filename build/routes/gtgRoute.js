"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var environment_1 = __importDefault(require("../environment"));
var router = express_1.default.Router();
router.get('/', function (req, resp) {
    resp.status(200).json({
        version: "1.0.0",
        status: 'up',
        environment: environment_1.default.APP_ENVIRONMENT
    });
});
exports.default = router;
