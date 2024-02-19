let age:number=18

if(age<2 && age>=0){
    console.log('Person is a baby');
}
else if(age>=2 && age<4){
    console.log('Person is a toddler');
}
else if(age>=4 && age<13){
    console.log('Person is a kid ');
}
else if(age>=13 && age<20){
    console.log('Person is a teenager');
}
else if(age>=20 && age<65){
    console.log('Person is a Adult');
}
else if(age>=65){
    console.log('Person is a Elder');
}
else{
    console.log('Age cannot be negative');
}
export{}