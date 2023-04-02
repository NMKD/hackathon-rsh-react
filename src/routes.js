import { createBrowserRouter } from "react-router-dom";
import { AppRoute } from "./constants";
import Layout from "./layouts/layouts";
import MainPage from "./pages/mainPage";
import FavoritePage from "./pages/favoritePage";
import UserPage from "./pages/userPage";
import ContactsPage from "./pages/contactsPage";
import NotFoundPage from "./pages/notFoundPage";
import LoginPage from "./pages/loginPage";

export const router = createBrowserRouter([
  {
    path: AppRoute.Root,
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: AppRoute.Favorite,
        element: <FavoritePage />,
      },
      {
        path: AppRoute.UserId,
        element: <UserPage />,
      },
      {
        path: AppRoute.Contacts,
        element: <ContactsPage />,
      },
      {
        path: AppRoute.Login,
        element: <LoginPage />,
      },
      {
        path: AppRoute.NotFound,
        element: <NotFoundPage />,
      },
    ],
  },
]);
