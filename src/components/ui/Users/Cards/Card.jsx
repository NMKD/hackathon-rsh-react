/* eslint-disable react/prop-types */
import Button from "../../../common/button";
import Links from "../../../common/Links";
const Card = ({ user }) => {
  return (
    <div className="w-full pt-5 my-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
  );
};

export default Card;
