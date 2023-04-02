/* eslint-disable comma-dangle */
/* eslint-disable function-call-argument-newline */
export const progress = [
  { _id: "67rdca3eeb7fprogress471818", name: "HTML", color: "green" },
  { _id: "67rdca3eeb7progress471820", name: "JavaScript", color: "red" },
  { _id: "67rdca3eeb7fprogress1822", name: "CSS", color: "gray" },
  { _id: "67rdca3eeb7progress71824", name: "React", color: "yellow" },
  { _id: "67rdca3eebprogress6684", name: "NodeJS", color: "purple" },
  { _id: "67rdca3progressf6gHsk0", name: "VUE", color: "green" },
  { _id: "67rdceywy2progress0", name: "Webpack", color: "brown" },
  { _id: "67progressceywy22Sjhbs0", name: "GIT", color: "olive" },
  { _id: "67progressceywy22Rwy990", name: "PHP", color: "aqua" },
  { _id: "67progressceywy22Usgsd770", name: "PUG", color: "indigo" },
  { _id: "67progressceywy2sh88h770", name: "Gulp", color: "blue" },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(progress);
    }, 1000);
  });

export default {
  fetchAll,
};
