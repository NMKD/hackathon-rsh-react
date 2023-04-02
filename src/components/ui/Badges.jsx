import PropTypes from "prop-types";

const Badges = ({ props }) => {
  const { name, color } = props;
  return (
    <span
      className="font-semibold font-sans text-gray-50 text-x mr-2 px-4 py-1.5 rounded-xl border border-gray-600"
      style={{ backgroundColor: color, opacity: 0.8 }}
    >
      {name}
    </span>
  );
};

Badges.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  props: PropTypes.object,
};

export default Badges;
