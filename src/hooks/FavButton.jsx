import { useFavorite } from "./useFavorite";
import PropTypes from "prop-types";

const FavButton = (userId) => {
  const { handleToggleFavorite, isFavorite } = useFavorite(userId);

  if (!isFavorite) {
    return (
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => handleToggleFavorite(userId)}
      >
        Добавить в избранное
      </button>
    );
  }

  return (
    <button
      type="button"
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={() => handleToggleFavorite(userId)}
    >
      ИЗБ
    </button>
  );
};

FavButton.propTypes = {
  userId: PropTypes.string,
};

export default FavButton;
