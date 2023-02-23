import addressBook from '../images/addressBook.png';
import { Container } from '@mui/material';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export const HomePage =() => {
  return(
    <Container>
      <div style={styles.container}>
        <img src= {addressBook} alt="address book" width="100%" height="100%"/>
      </div>
    </Container>

  )
}
