import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="md:justify-between sm:px-12 px-2 py-7 mx-auto container">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
