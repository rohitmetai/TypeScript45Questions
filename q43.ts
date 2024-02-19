let magicians:string[]=['Harry','Pablo','Sagar','Sushant','Joe']
let copyMagicians:string[]=[...magicians]

function show_magicians(magicians:string[]):void{
    console.log(magicians);   
}

function make_great(arr:string[]):string[]{
      for(let key in arr){
        arr[key]=arr[key].concat(' the great')
      }   
      return arr
}

let tempArray:string[]=make_great(copyMagicians);

show_magicians(magicians);  //original array of magician names
show_magicians(tempArray);  //added phrase the great
export{}