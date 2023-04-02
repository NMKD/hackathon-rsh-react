import { useState } from "react";
import PropTypes from "prop-types";
import { useFavorite } from "../../hooks/useFavorite";

const Button = ({ children, classBtn, userId }) => {
  const [favorite, setFavorite] = useState(false);
  const handleToggleFavorite = () => {
    useFavorite(userId);
    setFavorite((state) => !state);
  };
  const styleBtn = {
    favorite:
      "from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-blue-300 dark:focus:ring-blue-800",
    delete:
      "from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 focus:ring-pink-200 dark:focus:ring-pink-800",
  };

  return (
    <button
      onClick={() => handleToggleFavorite(userId)}
      className={
        "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:text-white dark:text-white focus:ring-4 focus:outline-none hover:text-white dark:text-white focus:ring-4 focus:outline-none " +
        (classBtn === "favorite" ? styleBtn.favorite : styleBtn.delete)
      }
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {favorite ? "Удалить" : children}
      </span>
    </button>
  );
};

Button.propTypes = {
  classBtn: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  userId: PropTypes.string,
};

export default Button;
