import addressBook from '../images/addressBook.png';

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
    <div style={styles.container}>
      <img src= {addressBook} alt="address book" width="100%" height="550"/>
     </div>
  )
}
