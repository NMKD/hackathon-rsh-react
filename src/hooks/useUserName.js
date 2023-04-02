import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../store/users";

const useUserName = (location, userData) => {
  const users = useSelector(getUsers());
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    if (location.includes("users/") && users !== null) {
      const user = users.find(user => user._id === userData[userData.length - 1]).name;
      setUserName(user);
    } else {
      setUserName(null);
    }
  }, [users, location]);

  return userName;
};

export default useUserName;
