import React from "react";
import { useState } from "react";
import { Button } from "rsuite";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function Login() {
  const [formValue, setFormValue] = useState({ Email: "", Password: "" });
  const [errors, setErrors] = useState({ Email: "", Password: "" });
  const isFormValid =
    formValue.Email && formValue.Password && !errors.Email && !errors.Password
      ? true
      : false;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleChange = (event, type) => {
    let newValue = event.target.value;

    setFormValue({ ...formValue, [type]: newValue });
    if (type === "Email") validateEmail(newValue);
    if (type === "Password") validatePassword(newValue);
  };

  const validateEmail = (value) => {
    if (!value.includes("@")) {
      setErrors({ ...errors, Email: "Manca la @." });
    } else if (!emailRegex.test(value)) {
      setErrors({
        ...errors,
        Email: "Non sembra una mail valida, ricontrolla per favore.",
      });
    } else {
      setErrors({ ...errors, Email: "" });
    }
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      setErrors({
        ...errors,
        Password: "Password troppo corta, inserire almeno 8 caratteri",
      });
    } else if (value === formValue.Email) {
      setErrors({
        ...errors,
        Password: "La password non può essere uguale alla mail",
      });
    } else {
      setErrors({ ...errors, Password: "" });
    }
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="login-logo">
          <img
            src="https://sysmanagement.it/careers/assets/img/logo.svg"
            alt="Logo System"
          />
          Systagram
        </div>
        <Input
          name="Email"
          placeholder="Inserisci la tua mail"
          handleChange={handleChange}
          error={errors.Email}
        />
        <Input
          name="Password"
          type="password"
          placeholder="Inserisci la tua password"
          handleChange={handleChange}
          error={errors.Password}
        />

        <Button type="submit" appearance="primary" disabled={!isFormValid}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
