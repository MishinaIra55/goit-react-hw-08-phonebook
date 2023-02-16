import { Helmet } from 'react-helmet';
import { ContactsEditor } from '../components/ContactsEditor/ContactsEditor';
import { ContactsList } from '../components/ContactList/ContactsList';

export const ContactsPage =() => {
  return(
    <div>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <ContactsEditor />
      {/*<div>{isLoading && 'Request in progress...'}</div>*/}
      <ContactsList />
    </div>
  )
}
