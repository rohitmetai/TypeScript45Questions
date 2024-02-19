"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var current_users = [];
current_users.push('Harry'.toLowerCase());
current_users.push('Alice'.toLowerCase());
current_users.push('Bob'.toLowerCase());
current_users.push('Carry'.toLowerCase());
current_users.push('Karan'.toLowerCase());
var new_users = ['Arjun', 'BOB', 'bilal', 'Abdul', 'HARRY'];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log('person will need to enter a new username');
    }
    else {
        console.log('Username is available');
    }
}
