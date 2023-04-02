import PropTypes from "prop-types";
import Button from "../../../common/button";
import Links from "../../../common/Links";
import WrapperCards from "./wrapperCards";

const Cards = ({ users }) => {
  return (
      <WrapperCards>
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
              <p className="p-3 text-center">{user.info}</p>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <Button>В избранное</Button>
                <Links id={user._id}>Открыть</Links>
              </div>
            </div>
          </div>
        ))}
      </WrapperCards>
  );
};

Cards.propTypes = {
  users: PropTypes.array,
};

export default Cards;
