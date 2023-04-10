import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { LogOutButton } from '../Navbar/NavbarElements';

const LogoutButton = () => {
const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
        <LogOutButton onClick={() => logout()}>
        Log Out
      </LogOutButton>
      )
  )
}

export default LogoutButton
