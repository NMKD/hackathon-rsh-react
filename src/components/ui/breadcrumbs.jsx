/* eslint-disable no-unneeded-ternary */
import { useLocation, Link } from "react-router-dom";
import { AppRoute, RouteDict } from "../../constants";
import useUserName from "../../hooks/useUserName";

const BreadCrumbs = () => {
  const location = useLocation().pathname;

  if (location === "/") {
    return;
  }

  const splittedLocation = location.split("/");
  const slicedLocation = splittedLocation.slice(1, splittedLocation.length);
  const userName = useUserName(location, slicedLocation);

  const linkCrumb = (href, i, data) => {
    return <div className="flex items-center">
      <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
      {
        i === data.length - 1
          ? <span className="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400">{userName ? userName : RouteDict[href]}</span>
          : <Link to={href} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{RouteDict[href]}</Link>
      }
    </div>;
  };

  return (
    <>
      <nav className="flex container mx-auto max-w-7xl px-2 sm:px-6 lg:px-6 mt-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to={AppRoute.Root} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              Главная
            </Link>
          </li>
          {slicedLocation.map((href, i) => (
            <li key={href}>
              {linkCrumb(href, i, slicedLocation)}
            </li>
          ))}
        </ol>
      </nav>

    </>

  );
};

export default BreadCrumbs;
