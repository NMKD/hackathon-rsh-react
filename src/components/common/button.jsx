import PropTypes from "prop-types";

const Button = ({ classBtn, children }) => {
  return (
    <button className={classBtn}>
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
