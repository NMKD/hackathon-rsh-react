export const social = [
  {
    _id: "67rdca3eeb7fVK471818",
    name: "VK",
  },
  {
    _id: "67rdca3eeb7fInst471818",
    name: "Instagram",
  },
  {
    _id: "67rdca3eeb7facebook471818",
    name: "Facebook",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(social);
    }, 1000);
  });

export default {
  fetchAll,
};
