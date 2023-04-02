import Button from "../../../common/button";
import Links from "../../../common/Links";
import PropTypes from "prop-types";

const Cards = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div
          key={user._id}
          className="w-full pt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 m-5  rounded-full shadow-lg"
              src={user.img}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Возраст: {user.age}
            </span>
            <div className="flex flex-col mt-4 md:mt-6">
              <Button classBtn="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm
              font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500
              group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4
              focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >В избранное</Button>
              <Links
                id={user._id}
                classLink="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >Открыть</Links>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

Cards.propTypes = {
  users: PropTypes.array,
};

export default Cards;
