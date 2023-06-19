"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var environment_1 = __importDefault(require("./environment"));
var routes = __importStar(require("./routes"));
var app = (0, express_1.default)();
var appPort = environment_1.default.APP_PORT;
var appEnvironment = environment_1.default.APP_ENVIRONMENT;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/__gtg', routes.gtgRouter);
app.use('/persons', routes.personRoute);
// route
app.get('/api/version', function (req, resp) {
    var jsonResponse = {
        version: "1.0.0",
        environment: appEnvironment
    };
    resp.setHeader('Content-Type', 'application/json');
    resp.writeHead(200);
    resp.end(JSON.stringify(jsonResponse));
});
app.get('/contact.html', function (req, resp) {
    resp.setHeader('Content-Type', 'text/html');
    resp.writeHead(200);
    resp.end('<html><body><h1>HTML response</h1></body></html>');
});
app.get('/contact.csv', function (req, resp) {
    resp.setHeader('Content-Type', 'text/csv');
    resp.writeHead(200);
    resp.end("id,name,salary\n1,Peter,3000");
});
app.listen(appPort, function () {
    console.log("[server]: Server is running at http://localhost:".concat(appPort));
});
