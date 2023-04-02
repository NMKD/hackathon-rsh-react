import PropTypes from "prop-types";

const ProgressBar = ({ props }) => {
  const { color, percentages, name } = props;

  return (
    <>
      <div className="flex justify-between mb-1">
        <span className={`text-base font-medium text-${color}-700 dark:text-${color}-500`}>{name}</span>
        <span className={`text-sm font-medium text-${color}-700 dark:text-white`}>{percentages + "%"}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className={`bg-${color}-600 h-2.5 rounded-full`} style={{
          width: percentages + "%",
        }}></div>
      </div>
    </>
  );
};

ProgressBar.propTypes = {
  props: PropTypes.object,
  color: PropTypes.string,
  percentages: PropTypes.number,
  name: PropTypes.string,
};

export default ProgressBar;
