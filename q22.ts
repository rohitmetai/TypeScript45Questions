//Intentional Error

var places: string[] = ['LAS VEGAS', 'MALDIVES', 'JAPAN', 'NEW YORK', 'CHINA'];

// Intentional Error: Trying to access an index that is out of bounds
console.log(places[5]); // Accessing index 5 which doesn't exist in the array

// Corrected Error:
// Ensuring that the index is within the bounds of the array before accessing it
if (places.length > 5) {
    console.log(places[5]);
} else {
    console.log("Index is out of bounds.");
}


export{}