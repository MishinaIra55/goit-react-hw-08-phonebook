import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from '../redux/auth/selectors';

export const useSelectors = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return (
      isLoggedIn,
      isRefreshing,
      user
  );
};
