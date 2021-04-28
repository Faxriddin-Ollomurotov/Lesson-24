// Birinchi usul
let n=15;
if(typeof n ==='number'){
    if(n%15===0)console.log('FizzBuzz');
    else if(n%5===0)console.log('Buzz');
    else if(n%3===0)console.log('Fizz');
}
else{
    console.log('Kiritganingiz son emas ekanku');
}


// Ikkinchi usul
// let result=fizzbuzz(60);
// console.log(result);
// function fizzbuzz(raqam){
//     if(typeof raqam==='number'){
//     if((raqam%3===0)&&(raqam%5===0))return 'FizzBuzz';
//     else if(raqam%5===0)return 'Buzz';
//     else if(raqam%3===0)return 'Fizz';
//     }
//     else return 'kiritganingiz son emas';
//     return raqam;
// }