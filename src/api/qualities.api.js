/* eslint-disable function-call-argument-newline */
/* eslint-disable comma-dangle */
export const qualities = [
  { _id: "67rdca3eeb7f6fgeed471198", name: "Котик", color: "green" },
  { _id: "67rdca3eeb7f6fgeed47689", name: "Воспитанный", color: "gray" },
  { _id: "67rdca3eeb7f6fgeed4711012", name: "Спортивный", color: "red" },
  { _id: "67rdca3eeb7f6fgeed471101", name: "Находчивый", color: "purple" },
  { _id: "67rdca3eeb7f6fgeed4729j01", name: "Трудолюбивый", color: "yellow" },
  { _id: "67rdca3eeb7f6fgsj055j01", name: "Веселый", color: "yellow" },
  {
    _id: "67rdca3eeb7sjs88gsj055j01",
    name: "Стрессоустойчивый",
    color: "blue",
  },
  { _id: "67rdca3eeb7sjssh111j055j01", name: "Обязательный", color: "indigo" },
  { _id: "67rdca3eeb7sjssh1992j01", name: "Пунктуальный", color: "blue" },
  { _id: "67rdca3eeb7sjss222", name: "Троль", color: "red" },
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
