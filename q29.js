var favorite_fruits = ['Banana', 'Apple', 'Melon'];
if (favorite_fruits.includes('Banana')) {
    console.log('You really like Bananas!');
}
if (favorite_fruits.includes('Apple')) {
    console.log('You really like Apple!');
}
if (favorite_fruits.includes('Melon')) {
    console.log('You really like Melon!');
}
if (favorite_fruits.includes('Orange')) { //Never executed because Orange doesnot exist in favourite_fruits.
    console.log('You really like Orange!');
}
if (favorite_fruits.includes('WaterMelon')) { //Never executed because WaterMelon doesnot exist in favourite_fruits.
    console.log('You really like WaterMelon!');
}
