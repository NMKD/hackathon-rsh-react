/* eslint-disable multiline-ternary */
import Container from "../../../common/container";
import Cards from "../Cards/Cards";
import { useSelector } from "react-redux";
// import { getUsers } from "../../../../store/users";
import { useFavorite } from "../../../../hooks/useFavorite";
import { useEffect, useState } from "react";
import { transformData } from "../../../../utils/transformData";
import { getSocial } from "../../../../store/social";
import { getQualities } from "../../../../store/qualities";
import { getProgress } from "../../../../store/progress";

const Favorites = () => {
  const [data, setData] = useState([]);
  const social = useSelector(getSocial());
  const qualities = useSelector(getQualities());
  const progress = useSelector(getProgress());
  const { storageItem } = useFavorite();

  useEffect(() => {
    if (storageItem.length > 0) {
      setData(transformData(storageItem, qualities, social, progress));
    }
  }, [storageItem]);

  return (
    <Container>
      {storageItem.length > 0 ? (
        <Cards users={data} />
      ) : (
        <p>У вас нет избранных :/ </p>
      )}
    </Container>
  );
};

export default Favorites;
