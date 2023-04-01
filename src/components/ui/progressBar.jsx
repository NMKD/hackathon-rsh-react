import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ progress, tech }) => {
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "blue",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${tech} ${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  progress: PropTypes.number,
  tech: PropTypes.string,
};
