import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="flex md:justify-between sm:px-12 px-2 py-7 mx-auto max-w-7xl">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.string,
};

export default Container;
