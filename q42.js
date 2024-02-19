"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magicians = ['Harry', 'Pablo', 'Sagar', 'Sushant', 'Joe'];
function show_magicians(magicians) {
    console.log(magicians);
}
function make_great(arr) {
    for (var key in arr) {
        arr[key] = arr[key].concat(' the great');
    }
}
show_magicians(magicians); //before adding the great phrase
make_great(magicians);
show_magicians(magicians); //after adding the phrase
