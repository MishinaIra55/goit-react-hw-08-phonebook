import css  from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
const dispatch = useDispatch();

  const handleSubmit = event => {
    console.log(logIn);
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
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  )
}
