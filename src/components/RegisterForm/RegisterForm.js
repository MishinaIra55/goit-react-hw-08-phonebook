import  css  from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Button, Container, TextField } from '@mui/material';

export const RegisterForm =()=> {
  const dispatch = useDispatch();

  const handleSubmit = event => {

    event.preventDefault();
    const form = event.currentTarget;
    console.log(register);
    dispatch(register(
      {
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      ));
    form.reset();
  };

  return(
    <Container sx={{mt: '3rem'}}>
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>

        <TextField label="Username" variant="outlined" type="text" name="name" />
      </label>
      <label className={css.label}>

        <TextField label="Email" type="email" name="email" />
      </label>
      <label className={css.label}>

        <TextField label="Password" type="password" name="password" />
      </label>
      <Button  variant="outlined" color="primary" type="submit">Register</Button>
    </form>
    </Container>
  )
};
