"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ordinal_num;
for (ordinal_num = 1; ordinal_num < 10; ordinal_num++) {
    if (ordinal_num == 1) {
        console.log("".concat(ordinal_num, "st"));
    }
    else if (ordinal_num == 2) {
        console.log("".concat(ordinal_num, "nd"));
    }
    else if (ordinal_num == 3) {
        console.log("".concat(ordinal_num, "rd"));
    }
    else {
        console.log("".concat(ordinal_num, "th"));
    }
}
