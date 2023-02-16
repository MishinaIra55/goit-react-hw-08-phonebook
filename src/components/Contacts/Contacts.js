import { css } from '@emotion/react';

export const Contacts = ()=> {
  const handleDelete =()=> {

  }
  return(
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}
