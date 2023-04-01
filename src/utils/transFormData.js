/* eslint-disable indent */
/* eslint-disable function-call-argument-newline */
/* eslint-disable comma-dangle */
export const setTranformProperty = (keys, data) => {
  const arr = [];
  keys.forEach((item) =>
    data.forEach(
      (value) => item._id === value._id && arr.push({ ...value, ...item })
    )
  );

  return arr;
};

export const setQualities = (keys, data) => {
  const arr = [];
  keys.forEach((item) =>
    data.forEach((value) => item === value._id && arr.push({ ...value }))
  );

  return arr;
};

export const tranformData = (users, qualities, socials, progress) => {
  return users.map((user) => ({
    ...user,
    social: setTranformProperty(user.social, socials),
    progress: setTranformProperty(user.progress, progress),
    qualities: setQualities(user.qualities, qualities),
  }));
};
