"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var people = [
    { id: 1, name: 'Clark Kent', age: 35 },
    { id: 2, name: 'Peter Parker', age: 21 },
    { id: 3, name: 'Juan Cruz', age: 28 }
];
// /persons
router.get('/', function (req, resp) {
    resp.status(200).json(people);
});
// /persons/100
router.get('/:id', function (req, resp) {
    var personId = parseInt(req.params.id);
    var person = people.find(function (p) { return p.id === personId; });
    if (person) {
        resp.status(200).json(person);
    }
    else {
        resp.status(404).json({ message: "person not found ".concat(personId) });
    }
});
// /persons
router.post('/', function (req, resp) {
    // request body
    var payload = __assign({}, req.body);
    resp.status(201).json(__assign(__assign({}, payload), { status: 'created' }));
});
exports.default = router;
