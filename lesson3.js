"use strict";
console.log ('Задание 1');

let num = 1;
function prime(a){
    if (a < 2) return false;
    if (a === 2|3) return true;
    for(let i = 4; i * i <= n; i+2) return !(n % i) ? false : true;
}
while (num < 101){
   if (prime(num)){
    console.log(num);
   }
    num++;
}

console.log('Задание 2');

let shopBasket = [
    ['Ложка', 100, 10],
    ['Кружка', 250, 4],
    ['Тарелка', 1000, 2],
    ['Чашка', 500, 2]
  ];

  function countBasketPrice(sumPriceArr) {
    if (Array.isArray(sumPriceArr) != true) {
        return 'Это не массив';
    }
    else {
    let result = 0;
    for (let arrString = 0; arrString < sumPriceArr.length; arrString++) {
      result = result + (+sumPriceArr[arrString][1] * +sumPriceArr[arrString][2]);
    }
    return result;
    } 
}
  console.log(countBasketPrice(shopBasket));