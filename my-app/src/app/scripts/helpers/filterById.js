"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterById(array, id) {
    return array.find(function (item) { return item._id === id; });
}
exports.default = filterById;
