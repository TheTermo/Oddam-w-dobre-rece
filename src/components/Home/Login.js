import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, Input, Button, Grid, Typography, Container } from '@mui/material';
import decorationImg from '../../assets/Decoration.svg';
import '../../scss/_Login.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Niepoprawny adres email',
      }));
    } else if (name === 'password' && value.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Hasło musi mieć co najmniej 6 znaków',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  // Obsługa wysyłki formularza
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className='login' id='login'>
      <Container maxWidth="xs">
        <div className='login-container'>
          <h1>Zaloguj się</h1>
          <img src={decorationImg} alt='decoration icon' className='decoration_img'/>
          <form onSubmit={handleSubmit} >
            <div className='email_password'>
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
                  />
                  {Boolean(errors.email) && <Typography color="error">{errors.email}</Typography>}
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
                  />
                  {Boolean(errors.password) && <Typography color="error">{errors.password}</Typography>}
                </FormControl>
              </Grid>
            </Grid>
            </div>
          <div className='login-buttons'>
            <Link to='/register'>
              <Button>Załóż konto</Button>
            </Link>
            <Button className='second-btn' type="submit" onClick={handleSubmit}>Zaloguj się</Button>
          </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Login;
