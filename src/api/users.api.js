export const users = [
  {
    _id: "67rdca3eeb7f6fgeed471815",
    name: "Кряжева Кристина",
    social: [
      {
        _id: "67rdca3eeb7fVK471818",
        name: "VK",
        href: "https://vk.com/idkristinatil",
      },
    ],
    progress: [
      { _id: "67rdca3eeb7fprogress471818", percentages: 95 },
      { _id: "67rdca3eebprogress6684", percentages: 55 },
      { _id: "67rdca3eeb7progress471820", percentages: 85 },
      { _id: "67rdca3progressf6gHsk0", percentages: 50 },
      { _id: "67rdca3eeb7progress71824", percentages: 75 },
      { _id: "67rdceywy2progress0", percentages: 15 },
      { _id: "67progressceywy22Sjhbs0", percentages: 65 },
      { _id: "67rdca3eeb7fprogress1822", percentages: 55 },
    ],
    qualities: ["67rdca3eeb7f6fgeed47689", "67rdca3eeb7f6fgeed471198"],
  },
  {
    _id: "67rdca3eeb7f6fgeed471816",
    name: "Янковой Александр",
    progress: [
      { _id: "67rdca3eeb7fprogress471818", percentages: 95 },
      { _id: "67rdca3eebprogress6684", percentages: 10 },
      { _id: "67rdca3eeb7progress471820", percentages: 65 },
      { _id: "67rdca3progressf6gHsk0", percentages: 35 },
      { _id: "67rdca3eeb7progress71824", percentages: 25 },
      { _id: "67progressceywy2sh88h770", percentages: 90 },
      { _id: "67rdceywy2progress0", percentages: 55 },
      { _id: "67progressceywy22Sjhbs0", percentages: 80 },
      { _id: "67rdca3eeb7fprogress1822", percentages: 85 },
    ],
    qualities: [
      "67rdca3eeb7f6fgeed47689",
      "67rdca3eeb7f6fgeed4729j01",
      "67rdca3eeb7f6fgeed471101",
    ],
  },
  {
    _id: "67rdca3eeb7f6fgeed471817",
    name: "Карамышев Булат",
    progress: [
      { _id: "67rdca3eeb7fprogress471818", percentages: 100 },
      { _id: "67rdca3eeb7progress471820", percentages: 85 },
      { _id: "67rdca3eeb7progress71824", percentages: 75 },
      { _id: "67progressceywy22Rwy990", percentages: 15 },
      { _id: "67progressceywy22Usgsd770", percentages: 90 },
      { _id: "67rdca3eeb7fprogress1822", percentages: 95 },
    ],
    qualities: [
      "67rdca3eeb7sjssh111j055j01",
      "67rdca3eeb7sjs88gsj055j01",
      "67rdca3eeb7f6fgsj055j01",
    ],
  },
  {
    _id: "67rdca3eeb7f6fgeed471818",
    name: "Сенин Максим",
    progress: [
      { _id: "67rdca3eeb7fprogress471818", percentages: 50 },
      { _id: "67rdca3eeb7progress471820", percentages: 65 },
      { _id: "67rdca3eeb7progress71824", percentages: 50 },
      { _id: "67rdca3eeb7fprogress1822", percentages: 50 },
    ],
    qualities: [
      "67rdca3eeb7f6fgeed4729j01",
      "67rdca3eeb7f6fgeed471101",
      "67rdca3eeb7f6fgeed4711012",
    ],
  },
  {
    _id: "67rdca3eeb7f6fgeed471819",
    name: "Окладная Анастасия",
    progress: [
      { _id: "67rdca3eeb7fprogress471818", percentages: 30 },
      { _id: "67rdca3eeb7fprogress1822", percentages: 10 },
      { _id: "67rdca3eeb7progress471820", percentages: 91 },
      { _id: "67rdca3eeb7progress71824", percentages: 94 },
    ],
    qualities: [
      "67rdca3eeb7f6fgeed4729j01",
      "67rdca3eeb7f6fgeed471101",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed47689",
    ],
  },
  {
    _id: "67rdca3eeb7f6fgeed471820",
    name: "Милес Виталий",
    progress: [
      { _id: "67rdca3eeb7fprogress471818", percentages: 50 },
      { _id: "67rdca3eeb7fprogress1822", percentages: 50 },
      { _id: "67rdca3eeb7progress471820", percentages: 50 },
      { _id: "67rdca3eeb7progress71824", percentages: 50 },
    ],
    qualities: [
      "67rdca3eeb7f6fgeed4729j01",
      "67rdca3eeb7sjssh111j055j01",
      "67rdca3eeb7f6fgeed4711012",
    ],
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("users")));
    }, 2000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("users")).find(
          (user) => user._id === id
        )
      );
    }, 1000);
  });

export default {
  fetchAll,
  getById,
};
