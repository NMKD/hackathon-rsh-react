import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { fetchUsers } from "./store/users";
import { fetchQualities } from "./store/qualities";
import { fetchSocial } from "./store/social";
import { fetchProgress } from "./store/progress";
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
