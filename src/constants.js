export const AppRoute = {
  Root: "/",
  NotFound: "*",
  UserId: "users/:userId",
  Users: "users",
  Favorite: "favorite",
  Login: "login",
  Portfolio: "portfolio",
  Contacts: "contacts"
};

export const RouteDict = {
  [AppRoute.Root]: "Главная",
  [AppRoute.Users]: "Наша Команда",
  [AppRoute.Favorite]: "Избранное",
  [AppRoute.Portfolio]: "Наши работы",
  [AppRoute.Contacts]: "Контакты"
};

export const KeyName = {
  Users: "users",
  Qualities: "qualities",
  Social: "social",
  Progress: "progress"
};
