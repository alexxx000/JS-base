"use strict";
console.log("Задание 1");
let input = 125;

function getObject(num) {
  let obj;
  if (num < 10) {
    return (obj = {
      еденицы: input,
      десятки: 0,
      сотни: 0,
    });
  } else if (num > 9 && num < 100) {
    let firstNum = Math.floor((num / 1) % 10);
    let secondtNum = Math.floor((num / 10) % 10);
    return (obj = {
      еденицы: firstNum,
      десятки: secondtNum,
      сотни: 0,
    });
  } else if (num > 99 && num < 1000) {
    let firstNum = Math.floor((num / 1) % 10);
    let secondtNum = Math.floor((num / 10) % 10);
    let thirdNum = Math.floor((num / 100) % 10);
    return (obj = {
      еденицы: firstNum,
      десятки: secondtNum,
      сотни: thirdNum,
    });
  } else {
    return (obj = {});
  }
}

console.log(getObject(input));

console.log("Задание 2");

let shopBasket = {
  appli: [
    {
      name: "Ложка",
      price: 100,
      amount: 10,
    },

    {
      name: "Кружка",
      price: 250,
      amount: 4,
    },

    {
      name: "Тарелка",
      price: 1000,
      amount: 2,
    },

    {
      name: "Чашка",
      price: 500,
      amount: 2,
    },
  ],
  /**
   * Считаем общую сумму(цена*колличество)
   *
   * @sumPriceArr {object} метод предназначен для объекта
   */

  countBasketPrice(sumPriceArr) {
    let result = 0;
    for (let a = 0; a <= this.appli.length; a++) {
      result += this.appli[0].price * this.appli[0].amount;
    }
    return result;
  },
};

console.log(shopBasket.countBasketPrice());
