/* eslint-disable function-call-argument-newline */
import React, { useEffect, useState } from "react";
import { transformData } from "../utils/transformData";
import { users } from "../api/users.api";
import { qualities } from "../api/qualities.api";
import { social } from "../api/social.api";
import { progress } from "../api/progress.api";
import Cards from "../components/ui/Users/Cards/Cards";

const MainPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(transformData(users, qualities, social, progress));
  }, []);

  return (
    <>
      <h1>Главная страница</h1>
      {data.length > 0 && <Cards users={data} />}
    </>
  );
};

export default MainPage;
