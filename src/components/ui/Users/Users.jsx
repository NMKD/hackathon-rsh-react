/* eslint-disable function-call-argument-newline */
/* eslint-disable comma-dangle */
import { useState, useEffect } from "react";
import social from "../../../api/social.api";
import progress from "../../../api/progress.api";
import qualities from "../../../api/qualities.api";
import users from "../../../api/users.api";
import User from "./User";
import { transformData } from "../../../utils/transformData";

const Users = () => {
  const [socialList, setSocial] = useState();
  const [progressList, setProgress] = useState();
  const [qualitiesList, setQualities] = useState();
  const [usersList, setUsers] = useState([]);
  const [data, setData] = useState([]);

  social.fetchAll().then((response) => setSocial(response));
  progress.fetchAll().then((response) => setProgress(response));
  qualities.fetchAll().then((response) => setQualities(response));
  users.fetchAll().then((response) => setUsers(response));

  useEffect(() => {
    setData(transformData(usersList, qualitiesList, socialList, progressList));
  }, [usersList]);

  return <>{data.length > 0 ? <User users={data} /> : "Загрузка..."}</>;
};

export default Users;
