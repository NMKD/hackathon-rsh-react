import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../store/users";

const useUserName = (userData, location) => {
  const users = useSelector(getUsers());
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    if (users !== null) {
      const user = users.find(user => user._id === userData);
      if (user) {
        setUserName(user.name);
      } else {
        setUserName(null);
      }
    }
  }, [users, location]);

  return userName;
};

export default useUserName;
