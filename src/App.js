import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layouts";
import MainPage from "./pages/mainPage";
import UserPage from "./pages/userPage";
import FavoritePage from "./pages/favoritePage";
import NotFoundPage from "./pages/notFoundPage";
import LoginPage from "./pages/loginPage";
import PortfolioPage from "./pages/portfolioPage";
import { AppRoute } from "./constants";

function App() {
  return (
        <Routes>
            <Route path={AppRoute.Root} element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path={AppRoute.Portfolio} element={<PortfolioPage />} />

                <Route path={AppRoute.Users}>
                    {/* <Route path="" element={<UserPage />} /> */}
                    <Route path={AppRoute.UserId} element={<UserPage />} />
                </Route>
                <Route path={AppRoute.Favorite} element={<FavoritePage />} />
                <Route path={AppRoute.Login} element={<LoginPage />} />
                <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
            </Route>
        </Routes>
  );
}

export default App;
