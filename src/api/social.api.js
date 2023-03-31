const social = [
  {
    _id: "67rdca3eeb7fVK471818",
    name: "VK",
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
