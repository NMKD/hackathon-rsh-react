/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */

import { useNavigate, useParams } from "react-router-dom";
const User = ({ users }) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const findById = () => {
    return users.find((item) => item._id === userId);
  };

  const user = findById(userId);

  console.log(users);
  console.log(userId);

  const goBack = () => {
    navigate(-1);
  };

  if (!user) return "loding";

  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.img} alt="Здесь должна быть картинка" height="400px" />
      <hr />
      <h2>Социальные сети</h2>
      {user.social.map((s) => (
        <li key={s._id}>
          <a href={s.href} key={s._id}>
            {s.name}
          </a>
        </li>
      ))}
      <hr />
      <div>
        <h2>Прогресс </h2>
      </div>
      <hr />
      <h2>Качества</h2>

      <hr />
      <button onClick={goBack}>Назад</button>
      <hr />
      <button>Добавить в избранное</button>
    </div>
  );
};

export default User;
