import React, { useState } from "react";
import styled from "../Form/Form.module.css";
import { TextField, Button } from "@mui/material";
export function validate(inputs) {

  let errors = {};

  if (inputs.password === "") errors.password = "Debes ingresar un passoword";

  return errors;
}



const Form = (props) => {
  const { login, error } = props;

  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );

    login(userData);

    setTimeout(() => {
      setErrors({
        name: "",
        password: "",
      });
    }, 3000);
  };

  return (
    <div className={styled.container}>
      <form>
        {error && <p className={styled.error}>{error}</p>}
        <h2>Inicia Sesión</h2>
        <div className={styled.inputBox}>
          <TextField
            label="Usuario"
            variant="outlined"
            type="text"
            value={userData.name}
            name="username"
            onChange={handleChange}
          />

          {errors.name && <p className={styled.error}>{errors.name}</p>}
          <h6 className={styled.message}>Usuario : abril</h6>
        </div>

        <div className={styled.inputBox}>
          <TextField
            type="password"
            variant="outlined"
            name="password"
            label="Contraseña"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <p className={styled.error}>{errors.password}</p>}
          <h6 className={styled.message}>Contraseña : 1313</h6>
        </div>
        <div className={styled.inputBox}>
          <Button
            onClick={handleSubmit}
            className={styled.button}
            color= "secondary"
            variant= "contained"
            type="submit"
          >
            Login
          </Button>{" "}
        </div>
      </form>
    </div>
  );
};

export default Form;
