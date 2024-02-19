
function make_Tshirt(size:string='Large',message:string='I love typescript'):void{
    console.log(`SIZE OF T-SHIRT : ${size} \nMESSAGE TO BE PRINTED: ${message}`);
} 

make_Tshirt();  // default size large and message

make_Tshirt('Medium') //Medium size with default message

make_Tshirt('Small','Typescript is superset of JavaScript') //Any size with different message
export{}