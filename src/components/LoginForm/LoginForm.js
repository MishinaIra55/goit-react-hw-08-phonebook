import css  from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Container, TextField } from '@mui/material';

export const LoginForm = () => {
const dispatch = useDispatch();

  const handleSubmit = event => {

    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,

      })
    );
    form.reset();
  };

  return (
    <Container sx={{mt: '3rem'}}>
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>

        <TextField  label='Email' type="email" name="email" />
      </label>
      <label className={css.label}>

        <TextField  label='Password' type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
    </Container>
  )
}
