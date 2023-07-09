// load food per list provided

foodList = [
  {
    category: "Burgers",
    title: "Hamburger 1",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
    favourite: false,
  },
  {
    category: "Burgers",
    title: "Hamburger 2",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
    favourite: false,
  },
  {
    category: "Burgers",
    title: "Hamburger 3",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
    favourite: false,
  },
  {
    category: "Burgers",
    title: "Hamburger 4",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
    favourite: false,
  },
  {
    category: "Burgers",
    title: "Hamburger 5",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
    favourite: false,
  },
  {
    category: "Burgers",
    title: "Hamburger 6",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
    favourite: false,
  },
  {
    category: "Burgers",
    title: "Hamburger 7",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
    favourite: false,
  },
  {
    category: "Burgers",
    title: "Hamburger 8",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
    favourite: false,
  },
  {
    category: "Burgers",
    title: "Hamburger 9",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
    favourite: false,
  },
  {
    category: "Burgers",
    title: "Hamburger 10",
    price: "$20.00",
    img: "./assets/food/hamburger.png",
    favourite: false,
  },
  {
    category: "Pizzas",
    title: "Pizza 1",
    price: "$20.00",
    img: "./assets/food/pizza.png",
    favourite: false,
  },
  {
    category: "Pizzas",
    title: "Pizza 2",
    price: "$20.00",
    img: "./assets/food/pizza.png",
    favourite: false,
  },
  {
    category: "Pizzas",
    title: "Pizza 3",
    price: "$20.00",
    img: "./assets/food/pizza.png",
    favourite: false,
  },
  {
    category: "Pizzas",
    title: "Pizza 4",
    price: "$20.00",
    img: "./assets/food/pizza.png",
    favourite: false,
  },
  {
    category: "Pizzas",
    title: "Pizza 5",
    price: "$20.00",
    img: "./assets/food/pizza.png",
    favourite: false,
  },
  {
    category: "Pizzas",
    title: "Pizza 6",
    price: "$20.00",
    img: "./assets/food/pizza.png",
    favourite: false,
  },
  {
    category: "Desserts",
    title: "Dessert 1",
    price: "$20.00",
    img: "./assets/food/dessert.png",
    favourite: false,
  },
  {
    category: "Desserts",
    title: "Dessert 2",
    price: "$20.00",
    img: "./assets/food/dessert.png",
    favourite: false,
  },
  {
    category: "Drinks",
    title: "Drinks 1",
    price: "$20.00",
    img: "./assets/food/drink.png",
    favourite: false,
  },
  {
    category: "Drinks",
    title: "Drinks 2",
    price: "$20.00",
    img: "./assets/food/drink.png",
    favourite: false,
  },
  {
    category: "Drinks",
    title: "Drinks 3",
    price: "$20.00",
    img: "./assets/food/drink.png",
    favourite: false,
  },
  {
    category: "Drinks",
    title: "Drinks 4",
    price: "$20.00",
    img: "./assets/food/drink.png",
    favourite: false,
  },
  {
    category: "Drinks",
    title: "Drinks 5",
    price: "$20.00",
    img: "./assets/food/drink.png",
    favourite: false,
  },
  {
    category: "Drinks",
    title: "Drinks 6",
    price: "$20.00",
    img: "./assets/food/drink.png",
    favourite: false,
  },
  {
    category: "Drinks",
    title: "Drinks 7",
    price: "$20.00",
    img: "./assets/food/drink.png",
    favourite: false,
  },
  {
    category: "Drinks",
    title: "Drinks 8",
    price: "$20.00",
    img: "./assets/food/drink.png",
    favourite: false,
  },
];

// create list of foods where you can filter by category and page

const foodContainer = document.querySelector("#card-container");
const categoryButtons = document.querySelectorAll("#category");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const page = document.querySelector("#page");

// initialise state values and generate starter list

let pageNum = 1;
let maxItemsPerPage = 10;
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

// add to favourites

const generateNavbarState = () => {
  let existingFavouriteItems = JSON.parse(localStorage.getItem("favourites"));
  console.log(existingFavouriteItems);
  let existingCartItems = JSON.parse(localStorage.getItem("cart"));
  if (existingFavouriteItems === null) {
    existingFavouriteItems = [];
  }
  if (existingCartItems === null) {
    existingCartItems = [];
  }
  if (existingFavouriteItems.length > 0) {
    favourites.textContent = existingFavouriteItems.length;
  } else {
    favourites.classList.add("hide");
  }
  if (existingCartItems.length > 0) {
    cart.textContent = existingCartItems.length;
  } else {
    cart.classList.add("hide");
  }
};

const favouriteIcon = document.querySelector("#favourite-icon");

const addToFavourites = (e) => {
  const title =
    e.target.nextSibling.nextSibling.nextSibling.children[0].children[0]
      .textContent;
  const price =
    e.target.nextSibling.nextSibling.nextSibling.children[0].children[1]
      .textContent;
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
    generateNavbarState();
    favourites.classList.remove("hide");
  }
};

// add to cart

const cartIcon = document.querySelector("#cart-icon");

const addToCart = (e) => {
  const title = e.target.previousSibling.children[0].textContent;
  const price = e.target.previousSibling.children[1].textContent;
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
    generateNavbarState();
    cart.classList.remove("hide");
  }
};

// generate favourites saved in local storage

let showFavourites = false;

const favouriteContainer = document.querySelector("#favourite-box");
const savedFavourites = localStorage.getItem("favourites");

const generateFavouriteContainer = () => {
  const savedFavourites = JSON.parse(localStorage.getItem("favourites"));
  if (showFavourites === true && savedFavourites) {
    favouriteContainer.classList.add("favourite-box");
    const allFavouriteButton = document.createElement("button");

    for (let item of savedFavourites) {
      const favouriteDiv = document.createElement("div");
      let favouriteTitle = document.createElement("p");
      let favouritePrice = document.createElement("p");
      const favouriteButton = document.createElement("button");

      favouriteContainer.appendChild(favouriteDiv);
      favouriteDiv.appendChild(favouriteTitle);
      favouriteDiv.appendChild(favouritePrice);
      favouriteDiv.appendChild(favouriteButton);
      console.log("first");

      favouriteTitle.textContent = item.title;
      favouritePrice.textContent = item.price;
      favouriteButton.textContent = "Remove";

      favouriteButton.addEventListener("click", () => {
        const savedFavourites = JSON.parse(localStorage.getItem("favourites"));
        let index = null;
        for (let i = 0; i < savedFavourites.length; i++) {
          if (savedFavourites[i].title === item.title) {
            index = i;
          }
        }
        savedFavourites.splice(index, 1);
        localStorage.setItem("favourites", JSON.stringify(savedFavourites));
        generateNavbarState();
        favouriteContainer.replaceChildren();
        favouriteContainer.classList.remove("favourite-box");
        showFavourites = !showFavourites;
      });
    }

    favouriteContainer.appendChild(allFavouriteButton);
    allFavouriteButton.textContent = "Remove All";
    allFavouriteButton.addEventListener("click", () => {
      removeAllFromFavourites();
      favouriteContainer.replaceChildren();
      favouriteContainer.classList.remove("favourite-box");
      showFavourites = !showFavourites;
    });
  } else {
    favouriteContainer.replaceChildren();
    favouriteContainer.classList.remove("favourite-box");
  }
};

// generate cart saved in local storage

let showCart = false;

const cartContainer = document.querySelector("#favourite-box");
const savedCart = localStorage.getItem("cart");

const generateCartContainer = () => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  if (showCart === true && savedCart) {
    cartContainer.classList.add("favourite-box");
    const allCartButton = document.createElement("button");

    for (let item of savedCart) {
      const cartDiv = document.createElement("div");
      let cartTitle = document.createElement("p");
      let cartPrice = document.createElement("p");
      const cartButton = document.createElement("button");

      cartContainer.appendChild(cartDiv);
      cartDiv.appendChild(cartTitle);
      cartDiv.appendChild(cartPrice);
      cartDiv.appendChild(cartButton);

      cartTitle.textContent = item.title;
      cartPrice.textContent = item.price;
      cartButton.textContent = "Remove";

      cartButton.addEventListener("click", () => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        let index = null;
        for (let i = 0; i < savedCart.length; i++) {
          if (savedCart[i].title === item.title) {
            index = i;
          }
        }
        savedCart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(savedCart));
        generateNavbarState();
        cartContainer.replaceChildren();
        cartContainer.classList.remove("favourite-box");
        showCart = !showCart;
      });
    }

    cartContainer.appendChild(allCartButton);
    allCartButton.textContent = "Remove All";
    allCartButton.addEventListener("click", () => {
      removeAllFromCart();
      cartContainer.replaceChildren();
      cartContainer.classList.remove("favourite-box");
      showCart = !showCart;
    });
  } else {
    cartContainer.replaceChildren();
    cartContainer.classList.remove("favourite-box");
  }
};

// toggle favourites container

favouriteIcon.addEventListener("click", () => {
  showFavourites = !showFavourites;
  showCart = false;
  cartContainer.replaceChildren();
  generateFavouriteContainer();
});

// remove all from favourites

const removeAllFromFavourites = () => {
  const existingCart = localStorage.getItem("cart");
  localStorage.clear();
  localStorage.setItem("cart", existingCart);
  generateNavbarState();
};

// toggle cart container

cartIcon.addEventListener("click", () => {
  showCart = !showCart;
  showFavourites = false;
  favouriteContainer.replaceChildren();
  // showFavourites = false;
  generateCartContainer();
});

// remove all from cart

const removeAllFromCart = () => {
  const existingFavourites = localStorage.getItem("favourites");
  localStorage.clear();
  localStorage.setItem("favourites", existingFavourites);
  generateNavbarState();
};

// search for items

const formInput = document.querySelector(".form-input");
const formButton = document.querySelector(".form-button");
const form = document.querySelector(".nav-search");
const initialFoodList = document.querySelector(".food-list");

const generateSearchItem = (title) => {
  const foodItem = document.createElement("li");
  foodItem.classList.add("search-option");
  foodItem.textContent = title;
  return foodItem;
};

const generateSeachList = (input) => {
  if (input.length > 0) {
    for (let i = 0; i < foodList.length; i++) {
      const title = foodList[i].title;
      if (title.toLowerCase().includes(input.toLowerCase())) {
        generateSearchItem(title);
        const item = generateSearchItem(title);
        initialFoodList.appendChild(item);
        initialFoodList.classList.remove("hide");
        item.addEventListener("click", () => {
          initialFoodList.classList.add("hide");
          formInput.value = "";
          const newList = foodList.filter((x) => x.title === title);
          generateCards(newList, newList[0].category, 0, 1);
        });
      }
    }
  } else {
    initialFoodList.classList.add("hide");
  }
};

formInput.addEventListener("input", (e) => {
  initialFoodList.replaceChildren();
  const input = e.target.value;
  generateSeachList(input);
});

const createFoodCards = (img, title, price) => {
  const newCard = document.createElement("div");
  const newCardIcon = document.createElement("img");
  const newCardFillIcon = document.createElement("img");
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
  newCard.appendChild(newCardFillIcon);
  newCard.appendChild(newCardImageContainer);
  newCard.appendChild(newCardTextContainer);

  newCardImageContainer.appendChild(newCardImage);
  newCardTextContainer.appendChild(newCardTextDetail);
  newCardTextDetail.appendChild(newCardTitle);
  newCardTextDetail.appendChild(newCardPrice);
  newCardTextContainer.appendChild(newCardButton);

  newCardIcon.className = "icon card-icon";
  newCardFillIcon.className = "icon card-icon hide";
  newCardImageContainer.className = "img-container";
  newCardTextContainer.className = "text-container";
  newCardImage.className = "food";
  newCardTextDetail.className = "text-detail";

  newCardIcon.src = "./assets/heart.png";
  newCardFillIcon.src = "./assets/heart-fill.png";
  newCardImage.src = img;
  newCardTitle.textContent = title;
  newCardPrice.textContent = price;
  newCardButton.textContent = "Add To Cart";

  newCardIcon.addEventListener("click", (e) => {
    addToFavourites(e);
    newCardIcon.classList.add("hide");
    newCardFillIcon.classList.remove("hide");
  });
  newCardFillIcon.addEventListener("click", (e) => {
    newCardIcon.classList.remove("hide");
    newCardFillIcon.classList.add("hide");
  });
  newCardButton.addEventListener("click", (e) => {
    addToCart(e);
  });
};

// create function to generate cards

const generateCards = (lst, category, start, end) => {
  console.log("lst");
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

// initialise load state

generateCards(foodList, currentCategory, startIdx, endIdx);

const favourites = document.querySelector(".favourite-count");
const cart = document.querySelector(".cart-count");

let existingFavouriteItems = JSON.parse(localStorage.getItem("favourites"));
let existingCartItems = JSON.parse(localStorage.getItem("cart"));

if (existingFavouriteItems === null) {
  existingFavouriteItems = [];
} else {
  favourites.textContent = existingFavouriteItems.length;
  favourites.classList.remove("hide");
}

if (existingCartItems === null) {
  existingCartItems = [];
} else {
  cart.textContent = existingCartItems.length;
  cart.classList.remove("hide");
}

if (pageNum === 1) {
  left.classList.add("fill-box-inactive");
}

if (pageNum === maxPages) {
  right.classList.add("fill-box-inactive");
}
