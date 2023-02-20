import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../../redux/contacts/selectors';
import { Contacts } from '../Contacts/Contacts';

export const ContactsList = ()=> {
  const contacts = useSelector(selectAllTasks);
  return(

    <ul className={css.list}>
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <Contacts id={id} text={text} />
        </li>
      ))}
    </ul>
  )
}
