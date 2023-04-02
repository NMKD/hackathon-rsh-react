import PropTypes from "prop-types";

const Button = ({ children, classBtn }) => {
  const styleBtn = {
    favorite:
      "from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-blue-300 dark:focus:ring-blue-800",
    delete:
      "from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 focus:ring-pink-200 dark:focus:ring-pink-800",
  };

  return (
    <button
      className={
        "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:text-white dark:text-white focus:ring-4 focus:outline-none hover:text-white dark:text-white focus:ring-4 focus:outline-none " +
        (classBtn === "favorite" ? styleBtn.favorite : styleBtn.delete)
      }
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {children}
      </span>
    </button>
  );
};

Button.propTypes = {
  classBtn: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
