import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import { Button, Container,  List, ListItemText } from '@mui/material';


export const ContactItem = ( { contact: { id, name, number } } ) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id))

  return (

    <Container>
      <h4>Her`s your contact book</h4>
    <List component="nav" >
      <ListItemText >{name}</ListItemText >
      <ListItemText >{number}</ListItemText >
      <Button   variant="contained" type='button' onClick={ handleDelete}>Delete
      </Button>
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
