import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import css from './AppBar.module.css';
import { useAuth } from '../../hooks/useAuth';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export const AppBarHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container sx={{mt: '1rem'}} >
    <AppBar position="static" >
      <Toolbar className={css.header}>
        <Typography variant="h6" >
          <Navigation />
        </Typography>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}

      </Toolbar>

    </AppBar>
    </Container>
  );
};



