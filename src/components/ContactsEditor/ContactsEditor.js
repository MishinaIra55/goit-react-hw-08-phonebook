import css from './ContactsEditor.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

export const ContactsEditor =()=> {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addContact(text));
      form.reset();
      return;
    }
    alert('Contact cannot be empty. Enter some text!');

  }
  return(
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  )
}
