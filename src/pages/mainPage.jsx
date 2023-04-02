/* eslint-disable function-call-argument-newline */
import React, { useEffect, useState } from "react";
import { transformData } from "../utils/transformData";
import { users } from "../api/users.api";
import { qualities } from "../api/qualities.api";
import { social } from "../api/social.api";
import { progress } from "../api/progress.api";
import Cards from "../components/ui/Users/Cards/Cards";

const MainPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(transformData(users, qualities, social, progress));
  }, []);

  return (
    <div className="flex md:justify-between sm:px-12 px-2 py-7 mx-auto max-w-7xl">
      {data.length > 0 && <Cards users={data} />}
    </div>
  );
};

export default MainPage;
