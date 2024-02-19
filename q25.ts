let alien_color:string='red'
let points:number=0
//fail version 
if(alien_color=='green'){  //hence the condition is failed so no output
    console.log('Player earned 5 points')
    points+=5
}
//pass version
if(alien_color=='red'){
    console.log('Player earned 5 points')
    points+=5
}

export{}