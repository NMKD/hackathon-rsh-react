import { useState } from "react";

export const useFavorite = (id) => {
  const [storageItem, setStorageItem] = useState(() =>
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  const isFavorite = storageItem.includes(id);

  const handleToggleFavorite = () => {
    if (!isFavorite) {
      const newStorageItem = [...storageItem, id];
      setStorageItem(newStorageItem);
      localStorage.setItem("favorites", JSON.stringify(newStorageItem));
    } else {
      const newStorageItem = storageItem.filter((savedId) => savedId !== id);
      setStorageItem(newStorageItem);
      localStorage.setItem("favorites", JSON.stringify(newStorageItem));
    }
  };
  return { handleToggleFavorite, isFavorite, storageItem };
};
