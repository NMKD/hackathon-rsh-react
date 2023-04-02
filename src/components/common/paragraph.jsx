import PropTypes from "prop-types";

const Paragraph = ({ children }) => {
  return (
    <p className="leading-normal text-center font-sans hover:font-mono font-medium">
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Paragraph;
