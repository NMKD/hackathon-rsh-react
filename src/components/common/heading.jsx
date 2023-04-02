import PropTypes from "prop-types";

const Heading = ({ children }) => {
  return (
    <h1 className="my-5 text-2xl text-center font-medium font-sans">
      {children}
    </h1>
  );
};

Heading.propTypes = {
  children: PropTypes.any,
};

export default Heading;
