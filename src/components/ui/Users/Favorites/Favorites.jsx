/* eslint-disable multiline-ternary */
import Container from "../../../common/container";
import Cards from "../Cards/Cards";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { transformData } from "../../../../utils/transformData";
import { getSocial } from "../../../../store/social";
import { getQualities } from "../../../../store/qualities";
import { getProgress } from "../../../../store/progress";
import { getUsers } from "../../../../store/users";

const Favorites = () => {
  const [data, setData] = useState([]);
  const users = useSelector(getUsers());
  const social = useSelector(getSocial());
  const qualities = useSelector(getQualities());
  const progress = useSelector(getProgress());
  const storage = localStorage.getItem("favorites");

  function getUsersStorage() {
    const arr = [];
    if (users !== null) {
      if (storage) {
        JSON.parse(storage).forEach((element) =>
          users.forEach((item) => item._id === element && arr.push(item))
        );
        return arr;
      }
    }
    return arr;
  }

  const favorites = getUsersStorage();

  useEffect(() => {
    if (favorites.length > 0 && qualities && social && progress) {
      setData(transformData(favorites, qualities, social, progress));
    }
  }, [users]);

  return (
    <Container>
      {favorites ? <Cards users={data} /> : <p>У вас нет избранных :/ </p>}
    </Container>
  );
};

export default Favorites;
