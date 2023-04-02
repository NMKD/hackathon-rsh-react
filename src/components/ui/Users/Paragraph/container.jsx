import PropTypes from "prop-types";

const ParagraphContainer = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-orange-300 rounded border-x-0 w-1/2 m-5 text-center my-8 p-8">
        {children}
      </div>
    </div>
  );
};

ParagraphContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ParagraphContainer;
