import PropTypes from "prop-types";

const Badges = ({ props }) => {
  const { name, color } = props;
  const classString = `bg-${color}-100 text-${color}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-${color}-900 dark:text-${color}-300`;

  return <span className={classString}>{name}</span>;
};

Badges.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  props: PropTypes.object,
};

export default Badges;
