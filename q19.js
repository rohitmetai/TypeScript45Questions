"use strict";
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
var guests = ['ALICE', 'BOB', 'HARRY'];
console.log("NUMBER OF PEOPLE INVITED : " + guests.length);
console.log(guests[0] + " REPLIED: I CAN'T COME FOR DINNER \n");
guests[0] = 'CARRY';
console.log("ALICE REPLACED WITH CARRY AND NUMBER OF PEOPLE INVITED IS STILL : " + guests.length);
console.log('AFTER FINDING BIGGER DINNING TABLE');
guests.unshift('KARAN');
guests.push('ARJUN');
guests.push('RAHUL');
console.log("NUMBER OF PEOPLE INVITED : " + guests.length);
console.log('I CAN ONLY INVITE 2 PERSONS FOR DINNER\n\n');
for (var i = guests.length - 1; i > 1; i--) {
    guests.pop();
}
console.log("NUMBER OF PEOPLE INVITED FINALLY : " + guests.length);
guests.pop(); //KARAN REMOVED
guests.pop(); //CARRY REMOVED
