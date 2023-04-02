import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

Container.defaultProps = {
  className: "md:justify-between sm:px-12 px-2 py-7 mx-auto container",
};

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Container;
