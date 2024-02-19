
function car_info(manufacturer:string,model_name:string,color:string,year:number):{}{
    var carObject={
        manufacturer:manufacturer,
        model_name:model_name,
        year:year,
        color:color
    }
    return carObject
}

console.table(car_info('Toyota','Yaris','White',2020))
console.table(car_info('Honda','City','Black',2023))

export{}