export const useFavorite = (id) => {
  const arr = [];
  if (!localStorage.getItem("favorites")) {
    arr.push(id);
    localStorage.setItem("favorites", JSON.stringify(arr));
  } else {
    const storage = JSON.parse(localStorage.getItem("favorites"));
    const isFavorite = storage.includes(id);

    if (isFavorite) {
      const newArr = storage.filter((item) => item !== id);
      localStorage.setItem("favorites", JSON.stringify(newArr));
    } else {
      storage.push(id);
      localStorage.setItem("favorites", JSON.stringify(storage));
    }
  }
};
