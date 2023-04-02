/* eslint-disable react/prop-types */
const WrapperCards = ({ children }) => {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
      {children}
    </div>
  );
};

export default WrapperCards;
