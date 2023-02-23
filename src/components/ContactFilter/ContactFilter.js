import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactFilter.module.css';
import { filterContact } from '../../redux/contacts/slicefilter';
import { TextField } from '@mui/material';
import { selectFilter } from '../../redux/contacts/selectors';



export const ContactFilter = ( ) => {

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

console.log(filter)
  const onChangeFilter = event => {
    console.log('data onchange: ', event.currentTarget.value);
    dispatch(filterContact(event.currentTarget.value));
  }

  return(
    <label className={styles.find}>
      Find contacts by name
      <TextField
        variant="outlined"
        className={styles.filter}
        type='name'
        value={filter}
        onChange={onChangeFilter} />
    </label>
  )
}


