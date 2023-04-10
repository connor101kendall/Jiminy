import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { LogInButton } from '../Navbar/NavbarElements';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <LogInButton onClick={() => loginWithRedirect()}>
      Log In
    </LogInButton>
    )
    
  )
}

export default LoginButton
