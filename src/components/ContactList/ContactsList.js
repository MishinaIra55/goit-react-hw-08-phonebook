import {  useSelector } from 'react-redux';
import { selectAllContacts, selectFilter } from '../../redux/contacts/selectors';
import { ContactItem } from '../ContactItem/ContactItem';



export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);


  const getFilteredList = () => {

    if (filter === '') {

      return contacts;

    } else {
      const normalizeFilter = filter.toLowerCase();
      // console.log(contacts)
      return contacts.filter(item => item.name.toLowerCase().includes(normalizeFilter));
    }
  };

  return (

    <ul>
      {getFilteredList() && getFilteredList().map(item => (

        <ContactItem key={item.id} contact={item} />
      ))}
    </ul>
  );
};
