import PropTypes from "prop-types";

const ProgressBar = ({ props }) => {
  const { color, percentages, name } = props;
  return (
    <li>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium dark:text-dark-100">{name}</span>
        <span className="text-sm font-medium dark:text-white">{percentages + "%"}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="h-2.5 rounded-full" style={{
          width: percentages + "%",
          backgroundColor: color
        }}
        ></div>
      </div>
    </li>
  );
};

ProgressBar.propTypes = {
  props: PropTypes.object,
  color: PropTypes.string,
  percentages: PropTypes.number,
  name: PropTypes.string,
};

export default ProgressBar;
