import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import User from "./User";
import { transformData } from "../../../utils/transformData";
import { getUsers } from "../../../store/users";
import { getProgress } from "../../../store/progress";
import { getQualities } from "../../../store/qualities";
import { getSocial } from "../../../store/social";

const Users = () => {
  const usersList = useSelector(getUsers());
  const socialList = useSelector(getSocial());
  const progressList = useSelector(getProgress());
  const qualitiesList = useSelector(getQualities());
  const [data, setData] = useState([]);

  useEffect(() => {
    if (usersList && socialList && progressList && qualitiesList) {
      setData(transformData(usersList, qualitiesList, socialList, progressList));
    }
  }, [usersList, socialList, progressList, qualitiesList]);

  return <>
    {data.length > 0 ? <User users={data} /> : "Загрузка..."}
  </>;
};

export default Users;
