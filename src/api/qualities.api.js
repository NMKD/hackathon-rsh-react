export const qualities = [
  { _id: "67rdca3eeb7f6fgeed471198", name: "Котик", color: "primary" },
  { _id: "67rdca3eeb7f6fgeed47689", name: "Воспитанный", color: "secondary" },
  { _id: "67rdca3eeb7f6fgeed4711012", name: "Спортивный", color: "success" },
  { _id: "67rdca3eeb7f6fgeed471101", name: "Находчивый", color: "danger" },
  { _id: "67rdca3eeb7f6fgeed4729j01", name: "Трудолюбивый", color: "info" },
  { _id: "67rdca3eeb7f6fgsj055j01", name: "Веселый", color: "warning" },
  {
    _id: "67rdca3eeb7sjs88gsj055j01",
    name: "Стрессоустойчивый",
    color: "dark",
  },
  { _id: "67rdca3eeb7sjssh111j055j01", name: "Обязательный", color: "dark" },
  { _id: "67rdca3eeb7sjssh1992j01", name: "Пунктуальный", color: "danger" },
  { _id: "67rdca3eeb7sjss222", name: "Троль", color: "danger" },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(qualities);
    }, 1000);
  });

export default {
  fetchAll,
};
