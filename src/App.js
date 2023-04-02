/* eslint-disable function-call-argument-newline */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/users";
import { fetchQualities } from "./store/qualities";
import { fetchSocial } from "./store/social";
import { fetchProgress } from "./store/progress";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchQualities());
    dispatch(fetchSocial());
    dispatch(fetchProgress());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
