import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import ProgressBar from "../progressBar";
import { SocialIcon } from "react-social-icons";
import Badges from "../Badges";
import Button from "../../common/button";

const User = ({ users }) => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const findById = () => {
    return users.find((item) => item._id === userId);
  };

  const user = findById(userId);

  const goBack = () => {
    navigate(-1);
  };

  if (!user) return "Загрузка...";

  return (
    <div className="mx-auto max-w-7xl px-2 py-7">
      <div className="flex-shrink max-w-full w-full px-3 pb-5">
        <div className="p-4 border border-gray-100 bg-white mb-4">
          <div className="flex flex-row">
            <div>
              <div className="rounded-full overflow-hidden w-20 sm:w-64 mb-5">
                <img className="max-w-full" src={user.img} alt={user.name} />
              </div>

              <div className="mb-8">
                {user.qualities.map((q) => (
                  <Badges key={q._id} props={q} />
                ))}
              </div>

              <Button>Добавить в избранное</Button>
            </div>

            <div className="ml-8">
              <div className="flex items-start">
                <div className="pr-8">
                  <h4 className="mb-3 text-2xl font-bold">{user.name}</h4>

                  <p className="mb-4 hidden sm:block">{user.info}</p>
                </div>

                <div>
                  <button
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                    onClick={goBack}
                  >Назад</span>
                  </button>
                </div>
              </div>

              <div className="mt-2 mb-10">
                <h5 className="mb-3 font-bold">Следуй за мною</h5>

                <ul className="space-x-3">
                  {user.social.map((instance) => (
                    <li key={instance._id}>
                        <SocialIcon key={instance._id} url={instance.href} />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="mb-3 font-bold">Мои скилы</h5>

                {user.progress.map(
                  instance => <ProgressBar key={instance._id} props={instance} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  users: PropTypes.array,
};

export default User;
