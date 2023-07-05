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
  newCardIcon.nodeValue = "Test";
  newCardImageContainer.className = "img-container";
  newCardTextContainer.className = "text-container";
  newCardImage.className = "food";
  newCardTextDetail.className = "text-detail";

  newCardIcon.src = "./assets/heart.png";
  newCardImage.src = img;
  newCardTitle.textContent = title;
  newCardPrice.textContent = price;
  newCardButton.textContent = "Add To Cart";

  newCardIcon.addEventListener("click", (e) => {
    addToFavourites(e);
  });
  newCardButton.addEventListener("click", (e) => {
    addToCart(e);
  });
};

// create list of foods where you can filter by category and page

const foodContainer = document.querySelector("#card-container");
const categoryButtons = document.querySelectorAll("#category");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const page = document.querySelector("#page");

// initialise state values and generate starter list

let pageNum = 1;
let maxItemsPerPage = 3;
let currentCategory = "All";
let maxPages = Math.ceil(foodList.length / maxItemsPerPage);
let startIdx = 0;
let actualEndIdx = maxItemsPerPage;
let endIdx = maxItemsPerPage;

// change category on button click

for (let button of categoryButtons) {
  button.addEventListener("click", () => {
    if (button.textContent === "All") {
      currentCategory = "All";
      maxPages = Math.ceil(foodList.length / maxItemsPerPage);
    }
    if (button.textContent === "Burgers") {
      currentCategory = "Burgers";
      maxPages = Math.ceil(
        foodList.filter((x) => x.category === currentCategory).length /
          maxItemsPerPage
      );
    }
    if (button.textContent === "Pizzas") {
      currentCategory = "Pizzas";
      maxPages = Math.ceil(
        foodList.filter((x) => x.category === currentCategory).length /
          maxItemsPerPage
      );
    }
    if (button.textContent === "Desserts") {
      currentCategory = "Desserts";
      maxPages = Math.ceil(
        foodList.filter((x) => x.category === currentCategory).length /
          maxItemsPerPage
      );
    }
    if (button.textContent === "Drinks") {
      currentCategory = "Drinks";
      maxPages = Math.ceil(
        foodList.filter((x) => x.category === currentCategory).length /
          maxItemsPerPage
      );
    }
    generateCards(foodList, currentCategory, startIdx, endIdx);

    if (pageNum === 1) {
      left.classList.add("fill-box-inactive");
    }

    if (pageNum === maxPages) {
      right.classList.add("fill-box-inactive");
    } else {
      right.classList.remove("fill-box-inactive");
    }
  });
}

// change slice indexs on button click

left.addEventListener("click", () => {
  if (pageNum > 1) {
    pageNum -= 1;
    page.textContent = pageNum;
    actualEndIdx -= maxItemsPerPage;
    if (startIdx - maxItemsPerPage < 0) {
      actualEndIdx = 0;
    } else {
      startIdx -= maxItemsPerPage;
    }
    if (actualEndIdx != endIdx) {
      endIdx = actualEndIdx;
    }
  }
  if (pageNum === 1) {
    left.classList.add("fill-box-inactive");
  }
  if (pageNum < maxPages) {
    right.classList.remove("fill-box-inactive");
  }
  generateCards(foodList, currentCategory, startIdx, endIdx);
});

right.addEventListener("click", () => {
  if (pageNum < maxPages) {
    pageNum += 1;
    page.textContent = pageNum;

    startIdx += maxItemsPerPage;
    actualEndIdx += maxItemsPerPage;
    if (endIdx + maxItemsPerPage > foodList.length) {
      endIdx = foodList.length;
    } else {
      endIdx += maxItemsPerPage;
    }
  }
  if (pageNum === maxPages) {
    right.classList.add("fill-box-inactive");
  }
  if (pageNum > 1) {
    left.classList.remove("fill-box-inactive");
  }
  generateCards(foodList, currentCategory, startIdx, endIdx);
});

// create function to generate cards

const generateCards = (lst, category, start, end) => {
  foodContainer.replaceChildren();
  let categoryList = [...lst];
  if (category !== "All") {
    categoryList = lst.filter((x) => x.category === category);
  }
  const finalList = categoryList.slice(start, end);
  for (let i of finalList) {
    createFoodCards(i.img, i.title, i.price);
  }
};

generateCards(foodList, currentCategory, startIdx, endIdx);

if (pageNum === 1) {
  left.classList.add("fill-box-inactive");
}

if (pageNum === maxPages) {
  right.classList.add("fill-box-inactive");
}

// add to favourites

const favouriteIcon = document.querySelector("#favourite-icon");

const addToFavourites = (e) => {
  const title =
    e.target.nextSibling.nextSibling.children[0].children[0].textContent;
  const price =
    e.target.nextSibling.nextSibling.children[0].children[1].textContent;
  console.log(title, price);
  const data = {
    title: title,
    price: price,
  };

  let existingItems = JSON.parse(localStorage.getItem("favourites"));
  if (existingItems === null) {
    existingItems = [];
  }
  if (existingItems.find((x) => x.title === data.title)) {
    // NEED TO CHANGE THIS TO AN ALERT BOX
  } else {
    existingItems.push(data);
    localStorage.setItem("favourites", JSON.stringify(existingItems));
  }
};

const checkFavourites = () => {
  console.log(JSON.parse(localStorage.getItem("favourites")));
};

favouriteIcon.addEventListener("click", () => {
  checkFavourites();
});

// add to cart

const cartIcon = document.querySelector("#cart-icon");

const addToCart = (e) => {
  const title = e.target.previousSibling.children[0].textContent;
  const price = e.target.previousSibling.children[0].textContent;
  const data = {
    title: title,
    price: price,
  };

  let existingItems = JSON.parse(localStorage.getItem("cart"));
  if (existingItems === null) {
    existingItems = [];
  }
  if (existingItems.find((x) => x.title === data.title)) {
    console.log("already exists");
    // NEED TO CHANGE THIS TO AN ALERT BOX
  } else {
    existingItems.push(data);
    localStorage.setItem("cart", JSON.stringify(existingItems));
  }
};

const checkCart = () => {
  console.log(JSON.parse(localStorage.getItem("cart")));
};

cartIcon.addEventListener("click", () => {
  checkCart();
});
