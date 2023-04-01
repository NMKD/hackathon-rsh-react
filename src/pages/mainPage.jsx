/* eslint-disable function-call-argument-newline */
import React, { useEffect, useState } from "react";
import { tranformData } from "../utils/transFormData";
import { users } from "../api/users.api";
import { qualities } from "../api/qualities.api";
import { social } from "../api/social.api";
import { progress } from "../api/progress.api";

const MainPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(tranformData(users, qualities, social, progress));
  }, []);
  console.log(data);
  return (
    <>
      <h1>Главная страница</h1>
    </>
  );
};

export default MainPage;
