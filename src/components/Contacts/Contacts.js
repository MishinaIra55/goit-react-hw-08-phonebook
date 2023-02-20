import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export const Contacts = ({id, text })=> {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));


  return(
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}
