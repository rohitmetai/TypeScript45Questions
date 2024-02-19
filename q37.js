"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_Tshirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love typescript'; }
    console.log("SIZE OF T-SHIRT : ".concat(size, " \nMESSAGE TO BE PRINTED: ").concat(message));
}
make_Tshirt(); // default size large and message
make_Tshirt('Medium'); //Medium size with default message
make_Tshirt('Small', 'Typescript is superset of JavaScript'); //Any size with different message
