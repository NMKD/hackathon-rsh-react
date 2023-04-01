/* eslint-disable function-call-argument-newline */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/users";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
