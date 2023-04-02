import PropTypes from "prop-types";

const ProgressBar = ({ props }) => {
  const { color, percentages, name } = props;

  return (
    <>
      <p className="ml-2 font-serif">{name}</p>
      <div className="ml-1 mb-2 w-full bg-neutral-200 dark:bg-neutral-600 rounded-full border-2 border-gray-100">
        <div
          className={
            "h-5 p-1  text-center font-medium leading-none rounded-full"
          }
          style={{ width: percentages + "%", backgroundColor: color }}
        >
          {percentages + "%"}
        </div>
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
