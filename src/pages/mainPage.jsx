/* eslint-disable function-call-argument-newline */
import React, { useEffect, useState } from "react";
import { transformData } from "../utils/transformData";
import { users } from "../api/users.api";
import { qualities } from "../api/qualities.api";
import { social } from "../api/social.api";
import { progress } from "../api/progress.api";
import Cards from "../components/ui/Users/Cards/Cards";
import Container from "../components/common/container";

const MainPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(transformData(users, qualities, social, progress));
  }, []);

  return (
    <Container>
      {data.length > 0 && <Cards users={data} />}
    </Container>
  );
};

export default MainPage;
