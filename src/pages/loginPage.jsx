/* eslint-disable multiline-ternary */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/common/container";
import LoginForm from "../form/loginForm";
import RegisterForm from "../form/registerForm";

const LoginPage = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );
  const toggleFormType = (params) => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <Container>
      <div className="w-full max-w-xs mx-auto">
        {formType === "register" ? (
          <>
            <h3 className="mb-4">Register</h3>
            <RegisterForm />
            <p>
              Уже зарегистрированы?
              <a role="button" onClick={toggleFormType}>
                Войти
              </a>
            </p>
          </>
        ) : (
          <>
            <h3 className="mb-4">Login</h3>
            <LoginForm />
            <p>
              Еще не зарегистрированы?
              <a role="button" onClick={toggleFormType}>
                Зарегистрироваться
              </a>
            </p>
          </>
        )}
      </div>
    </Container>
  );
};

export default LoginPage;
