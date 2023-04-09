import React from 'react'
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper, EmailLink } from './HeroElements'
import { Button } from '../ButtonElements'
import { useAuth0 } from '@auth0/auth0-react'
import  Profile  from '../Profile/Profile';
import LoginButton from '../LoginButton/LoginButton';

function Hero (){
  const { user, isAuthenticated } = useAuth0();

  return (
    <HeroContainer id='home'>
      <HeroContent>
        <HeroH1>Hi! I'm Jiminy</HeroH1>
        <HeroP>I am a digital health care assistant designed
          to help you document and understand your health.
        </HeroP>
        <Profile></Profile>
      </HeroContent>
    </HeroContainer>  
    
  )
}

export default Hero
