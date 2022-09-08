// "use strict";


// Задание 1

let ChessDesk = {
  tableElement: document.getElementById("chess"),
  testMethodRender() {
    for (let vert = 0; vert < 9; vert++) {
      const tr = document.createElement("tr");
      this.tableElement.appendChild(tr);
      for (let hor = 0; hor < 9; hor++) {
        const td = document.createElement("td");
        tr.appendChild(td);
        if (vert % 2 == 0 && hor % 2 == 0 && hor > 0 && vert > 0) {
          td.classList.add("black");
        } else if (vert % 2 != 0 && hor % 2 != 0) {
          td.classList.add("black");
        } else if (vert == 0 && hor > 0) {
          td.textContent = hor;
        }
        else if (vert > 0 && hor == 0) {
          let i = +vert + 64;
          td.textContent = String.fromCharCode(i);
        };
      }
    }
  },
}
ChessDesk.testMethodRender();


// Задание 2

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

  countBasketPrice() {
    let result = 0;
    for (let a = 0; a <= this.appli.length; a++) {
      result += this.appli[0].price * this.appli[0].amount;
    }
    return result;
  },
  //Отрисовка товаров в корзине
  renderBasket() {
    const basketEl = document.querySelector(".basket"); // получение div корзины
    const n = [];
    for (let i = 0; i < 4; i++) {
      //  добавление товаров 
      n.push(this.appli[i]);
    }
    if (n == 0) {
      basketEl.insertAdjacentHTML("beforeend", `</hr><p>Корзина пуста</p><hr>`);

    } else {
      let m = null;
      n.forEach((element) => {
        m += element.price * element.amount;
      });
      basketEl.insertAdjacentHTML("beforeend", `</hr><h2>В корзине:</h2><p> ${n.length} товаров на сумму ${m} рублей</p><hr>`);
    }

  },
  // Вывод массива товаров
  renArritem() {
    const item = document.querySelector(".basket")
    item.insertAdjacentHTML("beforeend", '<h3>Массив товаров:</h3><hr>')
    for (let i = 0; i < 4; i++) {
      item.insertAdjacentHTML("beforeend", `</hr><p> ${this.appli[i].name}</p><hr>`);
    }
  },
}
shopBasket.renderBasket()
shopBasket.renArritem()











