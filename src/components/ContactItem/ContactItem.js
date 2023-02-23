import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import { Container, IconButton, List, ListItemText } from '@mui/material';
import css from './ContactItem.module.css';

export const ContactItem = ( { contact: { id, name, number } } ) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id))

  return (
    <Container>
    <List component="nav" className={css.list }>
      <ListItemText >{name}</ListItemText >
      <ListItemText >{number}</ListItemText >
      <IconButton aria-label="delete"  type='button' onClick={ handleDelete}>Delete
      </IconButton>
    </List >
    </Container>
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
