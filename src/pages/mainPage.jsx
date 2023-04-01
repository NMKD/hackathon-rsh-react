import { useSelector } from "react-redux";
import { getUsers } from "../store/users";

const MainPage = () => {
    const users = useSelector(getUsers());
    console.log(users)

  return (
        <h1>Главная страница</h1>
  );
};

export default MainPage;
