"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var magicians = ['Harry', 'Pablo', 'Sagar', 'Sushant', 'Joe'];
var copyMagicians = __spreadArray([], magicians, true);
function show_magicians(magicians) {
    console.log(magicians);
}
function make_great(arr) {
    for (var key in arr) {
        arr[key] = arr[key].concat(' the great');
    }
    return arr;
}
var tempArray = make_great(copyMagicians);
show_magicians(magicians); //original array of magician names
show_magicians(tempArray); //added phrase the great
