import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';


export const ContactItem = ( { contact: { id, name, number } } ) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id))

  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <IconButton aria-label="delete"  type='button' onClick={ handleDelete}>Delete
      </IconButton>
    </li>
  )
}
ContactItem.proTypes = {

  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  )
}
