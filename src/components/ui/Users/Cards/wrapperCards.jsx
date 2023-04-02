import PropTypes from "prop-types";

const WrapperCards = ({ children }) => {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
      {children}
    </div>
  );
};

WrapperCards.propTypes = {
  children: PropTypes.any,
};

export default WrapperCards;
