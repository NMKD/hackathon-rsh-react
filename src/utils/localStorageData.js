export const getData = async (keyName, endPoint) => {
  if (!localStorage.getItem(keyName)) {
    const data = await endPoint();

    localStorage.setItem(keyName, JSON.stringify(data));

    return data;
  }

  const localStorageData = localStorage.getItem(keyName);

  return JSON.parse(localStorageData);
};
