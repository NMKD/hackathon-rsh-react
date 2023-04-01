/* eslint-disable function-call-argument-newline */
/* eslint-disable comma-dangle */
import { useState, useEffect } from "react";
import social from "../../../api/social.api";
import progress from "../../../api/progress.api";
import qualities from "../../../api/qualities.api";
import users from "../../../api/users.api";
import User from "./User";
import { tranformData } from "../../../utils/transFormData";

const Users = () => {
  const [socialList, setSocial] = useState();
  const [progressList, setProgress] = useState();
  const [qualitiesList, setQualities] = useState();
  const [usersList, setUsers] = useState([]);
  const [data, setData] = useState([]);
  console.log(data);

  social.fetchAll().then((response) => setSocial(response));
  progress.fetchAll().then((response) => setProgress(response));
  qualities.fetchAll().then((response) => setQualities(response));
  users.fetchAll().then((response) => setUsers(response));

  useEffect(() => {
    setData(tranformData(usersList, qualitiesList, socialList, progressList));
  }, []);

  return <>{data.length > 0 ? <User users={data} /> : "Loading..."}</>;
};

export default Users;
