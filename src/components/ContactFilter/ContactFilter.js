import PropTypes from 'prop-types';
import { useDispatch} from 'react-redux';
import styles from './ContactFilter.module.css';
import { filterContact } from '../../redux/contacts/slicefilter';
import { TextField } from '@mui/material';



export const ContactFilter = ( {value}) => {


  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  }

  return(
    <label className={styles.find}>
      Find contacts by name
      <TextField
        variant="outlined"
        className={styles.filter}
        type='text'
        value={value}
        onChange={onChangeFilter} />
    </label>
  )
}

ContactFilter.proTypes = {
  value:PropTypes.string.isRequired,
}
