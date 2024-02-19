"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guests = ['ALICE', 'BOB', 'HARRY'];
console.log('HEY ' + guests[0] + ', I would like to invite you for the dinner');
console.log('HEY ' + guests[1] + ', I would like to invite you for the dinner');
console.log('HEY ' + guests[2] + ', I would like to invite you for the dinner\n');
console.log(guests[0] + " REPLIED: I CAN'T COME FOR DINNER \n\n");
guests[0] = 'CARRY';
console.log('HEY ' + guests[0] + ', I would like to invite you for the dinner');
console.log('HEY ' + guests[1] + ', I would like to invite you for the dinner');
console.log('HEY ' + guests[2] + ', I would like to invite you for the dinner\n');
console.log('I FOUND A BIGGER DINNING TABLE');
guests.unshift('KARAN');
guests.push('ARJUN');
guests.push('RAHUL');
for (var i = 0; i < guests.length; i++) {
    console.log('HEY ' + guests[i] + ', I would like to invite you for the dinner');
}
