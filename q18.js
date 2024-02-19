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
// Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ['LAS VEGAS', 'MALDIVES', 'JAPAN', 'NEW YORK', 'CHINA'];
//Print your array in its original order
console.log(places);
//Print your array in alphabetical order without modifying the actual list.
var temp = __spreadArray([], places, true);
console.log(temp.sort());
//Show that your array is still in its original order by printing it.
console.log(places);
//Print your array in reverse alphabetical order without changing the order of the original list.
temp = __spreadArray([], places, true);
console.log(temp.reverse());
//Show that your array is still in its original order by printing it again.
console.log(places);
//Reverse the order of your list. Print the array to show that its order has changed
console.log(places.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order
console.log(places.reverse());
//Sort your array so it’s stored in alphabetical order.
//Print the array to show that its order has been changed.
console.log(places.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.
console.log(places.reverse());
