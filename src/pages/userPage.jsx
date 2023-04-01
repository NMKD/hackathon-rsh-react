/* eslint-disable indent */
/* eslint-disable function-call-argument-newline */
/* eslint-disable comma-dangle */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import social from "../api/social.api";
import progress from "../api/progress.api";
import qualities from "../api/qualities.api";

const UserPage = () => {
  const [socialList, setSocialList] = useState();
  const [progressList, setProgressList] = useState();
  const [qualitiesList, setQualitiesList] = useState();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  social.fetchAll().then((response) => setSocialList(response));
  progress.fetchAll().then((response) => setProgressList(response));
  qualities.fetchAll().then((response) => setQualitiesList(response));

  const getSocialName = (id) => {
    return socialList.find((s) => s._id === id).name;
  };

  const getQuality = (id) => {
    return qualitiesList.find((q) => q._id === id).name;
  };

  const getProgressName = (id) => {
    return progressList.find((p) => p._id === id).name;
  };

  const user = {
    _id: "67rdca3eeb7f6fgeed471818",
    name: "Сенин Максим",
    social: [
      {
        _id: "67rdca3eeb7telegram471818",
        href: "https://t.me/wecpo1337",
      },
    ],
    img: "https://i.ibb.co/cbDcbDC/photo-2023-03-31-19-52-33.jpg",
    progress: [
      { _id: "67rdca3eeb7fprogress471818", percentages: 50 },
      { _id: "67rdca3eeb7progress471820", percentages: 65 },
      { _id: "67rdca3eeb7progress71824", percentages: 50 },
      { _id: "67rdca3eeb7fprogress1822", percentages: 50 },
    ],
    qualities: ["67rdca3eeb7sjssh1992j01", "67rdca3eeb7sjss222"],
  };

  if (socialList) {
    return (
      <div>
        <h1>{user.name}</h1>
        <img src={user.img} alt="Здесь должна быть картинка" height="400px" />
        <hr />
        <h2>Социальные сети</h2>
        {user.social.map((s) => (
          <li key={s._id}>
            <a href={s.href} key={s._id}>
              {getSocialName(s._id)}
            </a>
          </li>
        ))}
        <hr />
        <div>
          <h2>Прогресс </h2>
          {user.progress.map((p) => (
            <li key={p._id}>
              {getProgressName(p._id)} - {p.percentages}%
            </li>
          ))}
        </div>
        <hr />
        <h2>Качества</h2>
        {user.qualities.map((q) => (
          <li key={q}>{getQuality(q)}</li>
        ))}
        <hr />
        <button onClick={goBack}>Назад</button>
        <hr />
        <button>Добавить в избранное</button>
      </div>
    );
  } else return "Загрузка...";
};

export default UserPage;
