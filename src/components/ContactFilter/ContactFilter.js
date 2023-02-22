import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactFilter.module.css';

import { selectFilter } from '../../redux/contacts/selectors';
import { filterContact } from '../../redux/contacts/slicefilter';

export const ContactFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(filterContact(event.currentTarget.value));
  };
  return(
    <div className={styles.filter}>
      <label className={styles.find}>
        <p>Find contacts by name</p>
        <input type="name" value={filter} onChange={handleChange} />
      </label>
    </div>
  )
}

ContactFilter.proTypes = {
  value:PropTypes.string.isRequired,
}
