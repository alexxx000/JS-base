"use strict";

const shopBasket = {
  catDiv: null,
  backet: null,
  appli: [
    {
      productnumber: 1,
      name: "Ложка",
      price: 100,
      q: 1000,
    },
    {
      productnumber: 2,
      name: "Кружка",
      price: 250,
      q: 0,
    },
    {
      productnumber: 3,
      name: "Тарелка",
      price: 1000,
      q: 1,
    },
    {
      productnumber: 4,
      name: "Чашка",
      price: 500,
      q: 1,
    },
  ],

  init(catDivClass, backet) {
    this.catDiv = document.querySelector(`.${catDivClass}`);
    this.backet = backet;
    this.render();
    this.addEventHandlers();
  },

  render() {
    if (this.appli.length > 0) {
      this.renderCatalogList();
    } else {
      this.catDiv.innerHTML = "";
      this.catDiv.textContent = "Каталог товаров пуст.";
    }
  },

  addEventHandlers() {
    this.catDiv.addEventListener("click", (event) => this.addGood(event));
  },

  addGood(event) {
    if (!event.target.classList.contains("inBacket")) return;
    const productnumber = +event.target.dataset.productnumber;
    const addProduct = this.appli.find(
      (prod) => prod.productnumber === productnumber
    );
    this.backet.addGood(addProduct);
  },

  renderCatalogList() {
    this.catDiv.innerHTML = "";
    this.appli.forEach((b) => {
      this.catDiv.insertAdjacentHTML("beforeend", this.renderCatalogb(b));
    });
  },

  renderCatalogb(b) {
    return `<div class="prod">
                <h4>${b.name}</h4>
                <p>${b.price} $.</p>
                <button class="inBacket" data-productnumber="${b.productnumber}">купить</button>
            </div>`;
  },
};

const backet = {
  backetDiv: null,
  clearBacket: null,
  cutlery: [
    {
      productnumber: 1,
      name: "Ложка",
      price: 100,
      amount: 1,
    },
  ],
  init(backetDivClass, clearBacket) {
    this.backetDiv = document.querySelector(`.${backetDivClass}`);
    this.clearBacket = document.querySelector(`.${clearBacket}`);

    this.addEventHandlers();
    this.render();
  },

  addEventHandlers() {
    this.clearBacket.addEventListener("click", this.dropBacket.bind(this));
  },
  dropBacket() {
    this.cutlery = [];
    this.render();
  },
  render() {
    if (this.cutlery.length > 0) {
      this.renderBacketList();
    } else {
      this.backetDiv.innerHTML = "";
      this.backetDiv.textContent = "Корзина пуста.";
    }
  },

  addGood(prod) {
    if (prod) {
      const findInBasket = this.cutlery.find(
        (b) => prod.productnumber === b.productnumber
      );
      if (findInBasket) {
        findInBasket.amount++;
      } else {
        this.cutlery.push({ ...prod, amount: 1 });
      }
      this.render();
    } else {
      alert("Ошибка добавления!");
    }
  },
  renderBacketList() {
    this.backetDiv.innerHTML = "";
    this.cutlery.forEach((b) => {
      this.backetDiv.insertAdjacentHTML(
        "beforeend",
        `<div><h4>${b.name}</h4><p>${b.price} $.</p><p>${b.amount} шт.</p></div>`
      );
    });
  },
};

shopBasket.init("cat", backet);
backet.init("backet", "clean");
