/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
const Cards = ({ users }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {users.map((user) => (
            <li key={user._id}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={user.img} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {user.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {user.progress.name}
                  </p>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {user.info}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
