"use strict";
// Initializing Array of usernames
Object.defineProperty(exports, "__esModule", { value: true });
var usernames = ['admin', 'ajay', 'Eric', 'carry', 'johny'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var user = usernames_1[_i];
    if (user == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log('Hello ' + user + ', thank you for logging in again.');
    }
}
