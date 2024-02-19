
let ordinal_num:number;

for(ordinal_num=1;ordinal_num<10;ordinal_num++){
    if(ordinal_num==1){
        console.log(`${ordinal_num}st`)
    }
    else if(ordinal_num==2){
        console.log(`${ordinal_num}nd`)
    }
    else if(ordinal_num==3){
        console.log(`${ordinal_num}rd`)
    }
    else{
        console.log(`${ordinal_num}th`)
    }
}
export{}