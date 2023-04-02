/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import ProgressBar from "../progressBar";
import Badges from "../Badges";
import Button from "../../common/button";
const User = ({ users }) => {
  const { userId } = useParams();
  // const navigate = useNavigate();

  const findById = () => {
    return users.find((item) => item._id === userId);
  };

  const user = findById(userId);

  // const goBack = () => {
  //   navigate(-1);
  // };

  if (!user) return "Загрузка...";

  return (
    <div className="mx-auto max-w-7xl px-2 py-7">
      <div className="flex-shrink max-w-full w-full px-3 pb-5">
        <div className="p-4 border border-gray-100 bg-white mb-4">
          <div className="flex flex-row items-center">
            <div className="rounded-full overflow-hidden w-20 sm:w-64">
              <img className="max-w-full" src={user.img} alt={user.name} />
            </div>
            <div className="ml-8">
              <h4 className="mb-3 text-2xl font-bold">{user.name}</h4>

              <p className="mb-4 hidden sm:block">{user.info}</p>

              <div className="mt-2">
                <ul className="space-x-3">
                  {user.social.map((instance) => (
                    <li key={instance._id}>
                      <a href={instance.href} key={instance._id}>
                        {instance.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 border border-gray-100 bg-white mb-4">
        {user.progress.map((p) => (
          <ProgressBar key={p._id} props={p} />
        ))}
      </div>
      <hr />
      <div className="p-4 border border-gray-100 bg-white mb-4">
        {user.qualities.map((q) => (
          <Badges key={q._id} props={q} />
        ))}
      </div>
      <Button>Назад</Button>
      <Button>Добавить в избранное</Button>
      {/* <button onClick={goBack}>Назад</button> */}
    </div>
  );
};

export default User;
