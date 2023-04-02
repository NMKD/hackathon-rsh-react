import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Links = ({ id, classLink, children }) => {
  return (
    <Link className={classLink} to={`users/${id}`}>
      {children}
      <svg
        aria-hidden="true"
        className="w-4 h-4 ml-2 -mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Link>
  );
};

Links.propTypes = {
  id: PropTypes.string,
  classLink: PropTypes.string,
  children: PropTypes.string,
};

export default Links;
