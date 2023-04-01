import { Link } from "react-router-dom";
import { AppRoute } from "../constants";

const NotFoundPage = () => {
  return (
    <>
      <h1>Страница не найдена</h1>
      <Link to={AppRoute.Root}>На главную</Link>
    </>
  );
};

export default NotFoundPage;
