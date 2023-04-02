/* eslint-disable function-call-argument-newline */
/* eslint-disable comma-dangle */
export const users = [
  {
    _id: "67rdca3eeb7f6fgeed471815",
    name: "Кряжева Кристина",
    social: [
      {
        _id: "67rdca3eeb7fVK471818",
        href: "https://vk.com/idkristinatil",
      },
    ],
    age: 33,
    img: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/Lczi/GnTxhcRJu",
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
    info: "ИТ-специалист, инженер. Начинающий Frontend-разработчик. Люблю путешествовать и собак.",
  },
  {
    _id: "67rdca3eeb7f6fgeed471816",
    name: "Янковой Александр",
    age: 36,
    social: [
      {
        _id: "67rdca3eeb7fVK471818",
        href: "https://vk.com/alex_lenk",
      },
    ],
    img: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/vKgP/z9ydKGvCP",
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
    info: "Разработчик с многолетним опытом. Знаю особенности frontent и backend-разработки. Увлекаюсь новыми знаниями в области IT.",
  },
  {
    _id: "67rdca3eeb7f6fgeed471817",
    name: "Карамышев Булат",
    age: 37,
    social: [
      {
        _id: "67rdca3eeb7fVK471818",
        href: "https://vk.com/bulatsrc",
      },
    ],
    img: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/2N7U/eJoNd51jV",
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
    info: "Frontend разработчик. Увлекаюсь новыми знаниями в области IT.",
  },
  {
    _id: "67rdca3eeb7f6fgeed471818",
    name: "Сенин Максим",
    age: 27,
    social: [
      {
        _id: "67rdca3eeb7telegram471818",
        href: "https://t.me/wecpo1337",
      },
    ],
    img: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/qPcr/7Kp6AW9cx",
    progress: [
      { _id: "67rdca3eeb7fprogress471818", percentages: 50 },
      { _id: "67rdca3eeb7progress471820", percentages: 65 },
      { _id: "67rdca3eeb7progress71824", percentages: 50 },
      { _id: "67rdca3eeb7fprogress1822", percentages: 50 },
    ],
    qualities: ["67rdca3eeb7sjssh1992j01", "67rdca3eeb7sjss222"],
    info: "Начинающий Junior Frontend-разработчик. Увлекаюсь IT, единоборствами (настоящими, не в программировании) и котиками",
  },
  {
    _id: "67rdca3eeb7f6fgeed471819",
    name: "Окладная Анастасия",
    age: 32,
    social: [
      {
        _id: "67rdca3eeb7fVK471818",
        href: "https://vk.com/id71432571",
      },
    ],
    img: "https://thumb.cloud.mail.ru/weblink/thumb/xw1/p7p6/yFmKkZY1F",
    progress: [
      { _id: "67rdca3eeb7fprogress471818", percentages: 30 },
      { _id: "67rdca3eeb7fprogress1822", percentages: 10 },
      { _id: "67rdca3eeb7progress471820", percentages: 91 },
      { _id: "67rdca3eeb7progress71824", percentages: 94 },
    ],
    qualities: ["67rdca3eeb7f6fgeed4729j01", "67rdca3eeb7sjssh1992j01"],
    info: "Начинающий Junior Frontend-разработчик. Люблю путешествовать, познавать что-то новое, делать что-либо своими руками (поделки, ремонт)",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(users);
    }, 1000);
  });

export default {
  fetchAll,
};
