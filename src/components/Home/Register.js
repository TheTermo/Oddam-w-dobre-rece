import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, Input, Button, Grid, Typography, Container } from '@mui/material';
import decorationImg from "../../assets/Decoration.svg";
import "../../scss/_Register.scss";
import HomeHeader from "./HomeHeader";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      console.log("Setting email error");
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Podany adres email jest nieprawidłowy",
      }));
    } else if (name === "password" && value.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Podane hasło jest za krótkie",
      }));
    } else if (
      name === "repeatPassword" &&
      (value.length < 6 || value !== formData.password)
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        repeatPassword: "Hasła nie są identyczne lub za krótkie",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    
    <section className="register" id="register"><HomeHeader />
      <Container maxWidth="xs">
        <div className="register-container">
          <h1>Załóż konto</h1>
          <img
            src={decorationImg}
            alt="decoration icon"
            className="decoration_img"
          />
          <form onSubmit={handleSubmit}>
            <div className="email_password">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={formData.email}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                    />
                    {Boolean(errors.email) && (
                      <Typography color="error">{errors.email}</Typography>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="password">Hasło</InputLabel>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      value={formData.password}
                      error={Boolean(errors.password)}
                      helperText={errors.password}
                    />
                    {Boolean(errors.password) && (
                      <Typography color="error">{errors.password}</Typography>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="repeatPassword">
                      Powtórz hasło
                    </InputLabel>
                    <Input
                      fullWidth
                      label="Powtórz hasło"
                      variant="outlined"
                      id="repeatPassword"
                      name="repeatPassword"
                      type="password"
                      onChange={handleChange}
                      value={formData.repeatPassword}
                      error={Boolean(errors.repeatPassword)}
                      helperText={errors.repeatPassword}
                    />
                    {Boolean(errors.repeatPassword) && (
                      <Typography color="error">
                        {errors.repeatPassword}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div className="login-buttons">
              <Link to="/login">
                <Button>Zaloguj się</Button>
              </Link>
              <Button
                className="second-btn"
                type="submit"
                onClick={handleSubmit}
              >
                Załóż konto
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Register;
