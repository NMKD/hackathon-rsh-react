import React, { useState } from "react";
import TextField from "../form/textField";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // const [enterError, setEnterError] = useState(null);
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    // setEnterError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Электронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
