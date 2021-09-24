//using local storage as DB

const addToFakeDb = (id) => {
  const exist = localStorage.getItem(id);

  if (!exist) {
    localStorage.setItem(id, 1);
  } else {
    const newCount = parseInt(exist) + 1;
    localStorage.setItem(id, newCount);
  }
};

export { addToFakeDb };
