/* eslint-disable function-call-argument-newline */
import React, { useEffect, useState } from "react";
import { tranformData } from "../utils/transFormData";
import { users } from "../api/users.api";
import { qualities } from "../api/qualities.api";
import { social } from "../api/social.api";
import { progress } from "../api/progress.api";
import Cards from "../components/ui/Users/Cards/Cards";
import { getUsers } from "../store/users";
import { useSelector } from "react-redux";

const MainPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(tranformData(users, qualities, social, progress));
  }, []);

  const usersFromStore = useSelector(getUsers());
  console.log(usersFromStore);

  return (
    <>
      <h1>Главная страница</h1>
      {data.length > 0 && <Cards users={data} />}
    </>
  );
};

export default MainPage;
