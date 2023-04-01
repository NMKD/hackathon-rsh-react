/* eslint-disable comma-dangle */
/* eslint-disable function-call-argument-newline */
export const progress = [
  { _id: "67rdca3eeb7fprogress471818", name: "HTML" },
  { _id: "67rdca3eeb7progress471820", name: "JavaScript" },
  { _id: "67rdca3eeb7fprogress1822", name: "CSS" },
  { _id: "67rdca3eeb7progress71824", name: "React" },
  { _id: "67rdca3eebprogress6684", name: "NodeJS" },
  { _id: "67rdca3progressf6gHsk0", name: "VUE" },
  { _id: "67rdceywy2progress0", name: "Webpack" },
  { _id: "67progressceywy22Sjhbs0", name: "GIT" },
  { _id: "67progressceywy22Rwy990", name: "PHP" },
  { _id: "67progressceywy22Usgsd770", name: "PUG" },
  { _id: "67progressceywy2sh88h770", name: "Gulp" },
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
