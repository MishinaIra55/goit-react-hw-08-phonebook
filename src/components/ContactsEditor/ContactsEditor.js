import { css } from '@emotion/react';

export const ContactsEditor =()=> {

  const handleSubmit = event => {
    event.preventDefault();
  }
  return(
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Add task
      </button>
    </form>
  )
}
