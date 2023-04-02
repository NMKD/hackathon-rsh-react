export const setTransformProperty = (keys, data) => {
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
  keys.forEach(instance =>
    data.forEach(value => instance === value._id && arr.push({ ...value }))
  );

  return arr;
};

export const transformData = (users, qualities, socials, progress) => {
  return users.map(user => ({
    ...user,
    social: setTransformProperty(user.social, socials),
    progress: setTransformProperty(user.progress, progress),
    qualities: setQualities(user.qualities, qualities),
  }));
};
