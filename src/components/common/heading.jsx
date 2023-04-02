/* eslint-disable react/prop-types */
const Heading = ({ children }) => {
  return (
    <h1 className="my-5 text-2xl text-center font-medium font-sans hover:font-mono">
      {children}
    </h1>
  );
};

export default Heading;
