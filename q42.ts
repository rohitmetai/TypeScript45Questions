var magicians:string[]=['Harry','Pablo','Sagar','Sushant','Joe']

function show_magicians(magicians:string[]):void{
    console.log(magicians);   
}

function make_great(arr:string[]){
    for(let key in arr){
      arr[key]=arr[key].concat(' the great')
    }   
}

show_magicians(magicians); //before adding the great phrase
make_great(magicians);
show_magicians(magicians); //after adding the phrase

export{}