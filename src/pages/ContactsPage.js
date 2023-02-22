import { Helmet } from 'react-helmet';
import { ContactList } from '../components/ContactList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import {ContactFilter} from '../components/ContactFilter/ContactFilter';
import { ContactForm } from '../components/ContactsForm/ContactForm';

// export default function ContactsPage() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);
//
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//
//
//     return (
//       <>
//         <Helmet>
//           <title>Your contacts</title>
//         </Helmet>
//         <ContactsEditor />
//         <div>{isLoading && 'Request in progress...'}</div>
//         <ContactsList />
//       </>
//     );
//   }

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);



  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactForm/>

      <ContactFilter/>
      <ContactList />
    </>
  );
};
