"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usernames = [];
if (usernames.length != 0) {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var user = usernames_1[_i];
        if (user == 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log('Hello ' + user + ', thank you for logging in again.');
        }
    }
}
else {
    console.log('We need to find some users!');
}
