
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts, selectFilter } from '../../redux/contacts/selectors';

import styles from './ContactsList.module.css';
import { deleteContact } from '../../redux/contacts/operations';



export const ContactsList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => {


    return contact.name.toLowerCase().includes(filter.toLowerCase());

  });

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            className={styles.btn}
            type="submit"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
