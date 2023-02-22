import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
// import css from './AppBar.module.css';
import { useAuth } from '../../hooks/useAuth';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export const AppBarHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container sx={{mt: '1rem'}}>
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Typography>

      </Toolbar>
      {/*<Navigation />*/}
      {/*{isLoggedIn ? <UserMenu /> : <AuthNav />}*/}
    </AppBar>
    </Container>
  );
};


//className={css.header}
