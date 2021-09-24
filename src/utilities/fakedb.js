//using local storage as DB
const addToFakeDb = (id) => {
  const exist = getDb();

  // here at first I used const : be alart
  let shopping_cart = {};

  if (!exist) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = JSON.parse(exist);

    //check if id available in shopping cart
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = 1;
    }
  }

  localStorage.setItem("shopping_cart", JSON.stringify(shopping_cart));
};

//removing from local storage

const getDb = () => {
  localStorage.getItem("shopping_cart");
};

const removeFromDb = (id) => {
  const exist = getDb();

  if (!exist) {
  } else {
    const shopping_cart = JSON.parse(exist);
    delete shopping_cart[id];
  }
};
export { addToFakeDb };
