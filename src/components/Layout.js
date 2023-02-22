import { Suspense } from 'react';
import {  AppBarHeader } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return(
    <div >
      <AppBarHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}
