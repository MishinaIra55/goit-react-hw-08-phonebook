import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactFilter.module.css';
import { filterContact } from '../../redux/contacts/slicefilter';
import { TextField } from '@mui/material';
import { selectFilter } from '../../redux/contacts/selectors';


export const ContactFilter = () => {

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();


  const onChangeFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  return (
    <label className={styles.find}>

      <TextField
        label="Find contacts by name"
        variant='outlined'
        className={styles.filter}
        type='name'
        value={filter}
        onChange={onChangeFilter} />
    </label>
  );
};


