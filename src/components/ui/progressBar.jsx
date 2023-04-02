import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ props }) => {
  const { name, percentages, color } = props;
  console.log(color);

  return (
    <>
      {" "}
      <span className="ml-2">{name}</span>
      <div className="ml-1 w-full bg-neutral-200 dark:bg-neutral-600 rounded-full">
        <div
          className={
            "h-5 p-0.5 text-center text-base font-medium leading-none text-primary-100 rounded-full"
          }
          style={{ width: percentages + "%", backgroundColor: color }}
        >
          {percentages + "%"}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  props: PropTypes.object,
  color: PropTypes.string,
  percentages: PropTypes.number,
  name: PropTypes.string,
};
