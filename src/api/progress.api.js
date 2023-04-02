export const progress = [
  { _id: "67rdca3eeb7fprogress471818", name: "HTML", color: "#E94929" },
  { _id: "67rdca3eeb7progress471820", name: "JavaScript", color: "#F1E05A" },
  { _id: "67rdca3eeb7fprogress1822", name: "CSS", color: "#C6538C" },
  { _id: "67rdca3eeb7progress71824", name: "React", color: "#61dafb" },
  { _id: "67rdca3eebprogress6684", name: "NodeJS", color: "#64DE64" },
  { _id: "67rdca3progressf6gHsk0", name: "VUE", color: "#41B883" },
  { _id: "67rdceywy2progress0", name: "Webpack", color: "#8ed6fb" },
  { _id: "67progressceywy22Sjhbs0", name: "GIT", color: "#f14e32" },
  { _id: "67progressceywy22Rwy990", name: "PHP", color: "#4F5B93" },
  { _id: "67progressceywy22Usgsd770", name: "PUG", color: "#a86454" },
  { _id: "67progressceywy2sh88h770", name: "Gulp", color: "#cf4647" },
];

const fetchAll = () => new Promise((resolve) => {
  window.setTimeout(function () {
    resolve(progress);
  }, 1000);
});

export default {
  fetchAll,
};
