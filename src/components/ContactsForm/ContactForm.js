import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectAllContacts } from '../../redux/contacts/selectors';

//
// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectAllContacts);
//
//   const handleChangeName = event => {
//     setName(event.currentTarget.value);
//   };
//
//   const handleChangeNumber = event => {
//     setNumber(event.currentTarget.value);
//   };
//
//   const handleSubmit = event => {
//     event.preventDefault();
//     const normalizedName = name.toLowerCase();
//
//     if (
//       contacts.find(contact => contact.name.toLowerCase() === normalizedName)
//     ) {
//       return alert(`${name} is already in contacts`);
//     }
//     dispatch(
//       addContact({
//         name: name,
//         number: number,
//       })
//     );
//     reset();
//   };
//
//   const reset = () => {
//     setName('');
//     setNumber('');
//   };
//
//   return(
//
//     <>
//       <form className={css.form} onSubmit={handleSubmit}>
//         <label>
//           Name
//           <input
//             value={name}
//             className={css.input}
//             onChange={handleChangeName}
//             type='text'
//             name='name'
//
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//
//         <label>
//           Number
//           <input
//             value={number}
//             className={css.input}
//             onChange={handleChangeNumber}
//             type='tel'
//             name='number'
//
//             pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
//             title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//             required
//           />
//         </label>
//
//         <button type='submit'>Add contact</button>
//       </form>
//     </>
//   )
// }


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const contactData = contacts.find((user) => user.name === form.elements.name.value);

    if (contactData) {
      alert(`${form.elements.name.value} is already in contacts`);
    } else {
      dispatch(addContact(
        {
          name: form.elements.name.value,
          phone: form.elements.phone.value,
        },
      ));
      form.reset();
    }

  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={css.input}
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            className={css.input}
            type='tel'
            name='number'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
          />
        </label>

        <button type='submit'>Add contact</button>
      </form>
    </>
  );
};
