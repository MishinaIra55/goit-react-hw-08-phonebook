import {  useMemo } from 'react';
import {  useSelector } from 'react-redux';
import { selectAllContacts, selectFilter } from '../../redux/contacts/selectors';
import { ContactItem } from '../ContactItem/ContactItem';



export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);


  const filteredList = useMemo(() => {
    if (!filter) {
      return contacts;
    } else {
      const normalizeFilter = filter.toLowerCase();

      return contacts.filter(item => item.name?.toLowerCase()?.includes(normalizeFilter));
    }
  }, [filter, contacts]);

  return (

    <ul>
      {Boolean(filteredList.length) && filteredList.map(item => (

        <ContactItem key={item.id} contact={item} />
      ))}
    </ul>
  );
};
