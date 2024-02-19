let current_users:string[]=[]
current_users.push('Harry'.toLowerCase())
current_users.push('Alice'.toLowerCase())
current_users.push('Bob'.toLowerCase())
current_users.push('Carry'.toLowerCase())
current_users.push('Karan'.toLowerCase())

let new_users:string[]=['Arjun','BOB','bilal','Abdul','HARRY']

for(let i:number=0;i<new_users.length;i++){
    if(current_users.includes(new_users[i].toLowerCase())){
           console.log('person will need to enter a new username');
    }
    else{
        console.log('Username is available');
    }
}
export{}