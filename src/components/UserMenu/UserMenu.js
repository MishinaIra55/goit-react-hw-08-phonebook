import { css } from '@emotion/react';

export const UserMenu = ()=> {
  return(
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  )
}