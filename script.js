// load food per list provided

foodList = [
  {
    category: "Burgers",
    title: "Hamburger 1",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
  },
  {
    category: "Burgers",
    title: "Hamburger 2",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
  },
  {
    category: "Burgers",
    title: "Hamburger 3",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
  },
  {
    category: "Pizzas",
    title: "Pizza 1",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
  },
  {
    category: "Pizzas",
    title: "Pizza 2",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
  },
  {
    category: "Pizzas",
    title: "Pizza 3",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
  },
  {
    category: "Desserts",
    title: "Dessert 1",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
  },
  {
    category: "Desserts",
    title: "Dessert 2",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
  },
  {
    category: "Drinks",
    title: "Drinks 1",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
  },
  {
    category: "Drinks",
    title: "Drinks 2",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
  },
];

const createFoodCards = (img, title, price) => {
  const newCard = document.createElement("div");
  const newCardIcon = document.createElement("img");
  const newCardImageContainer = document.createElement("div");
  const newCardTextContainer = document.createElement("div");

  const newCardImage = document.createElement("img");
  const newCardTextDetail = document.createElement("div");
  const newCardTitle = document.createElement("h4");
  const newCardPrice = document.createElement("h4");
  const newCardButton = document.createElement("button");

  newCard.className = "card";
  foodContainer.appendChild(newCard);

  newCard.appendChild(newCardIcon);
  newCard.appendChild(newCardImageContainer);
  newCard.appendChild(newCardTextContainer);

  newCardImageContainer.appendChild(newCardImage);
  newCardTextContainer.appendChild(newCardTextDetail);
  newCardTextDetail.appendChild(newCardTitle);
  newCardTextDetail.appendChild(newCardPrice);
  newCardTextContainer.appendChild(newCardButton);

  newCardIcon.className = "icon card-icon";
  newCardImageContainer.className = "img-container";
  newCardTextContainer.className = "text-container";
  newCardImage.className = "food";
  newCardTextDetail.className = "text-detail";

  newCardIcon.src = "./assets/heart.png";
  newCardImage.src = img;
  newCardTitle.textContent = title;
  newCardPrice.textContent = price;
  newCardButton.textContent = "Add To Cart";
};

const foodContainer = document.querySelector("#card-container");

for (let i of foodList) {
  createFoodCards(i.img, i.title, i.price);
}

// filter by category

const categories = document.querySelectorAll("#category");

for (let cat of categories) {
  cat.addEventListener("click", () => {
    if (cat.textContent === "All") {
      foodContainer.replaceChildren();
      for (let i of foodList) {
        createFoodCards(i.img, i.title, i.price);
      }
    } else {
      const catList = foodList.filter((x) => x.category === cat.textContent);
      foodContainer.replaceChildren();
      for (let i of catList) {
        createFoodCards(i.img, i.title, i.price);
      }
    }
  });
}
