import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

import { RegisterPage } from '../pages/RegisterPage';
import { Layout } from './Loyout';
import { ContactsPage } from '../pages/ContactsPage';

export const App = () => {
  return (
    <Routes>
      <Route path= '/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
