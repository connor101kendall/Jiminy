import React from 'react'
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper, EmailLink } from './HeroElements'
import { Button } from '../ButtonElements'

function Hero (){
  return (
    <HeroContainer id='home'>
      <HeroContent>
        <HeroH1>Hi! I'm Jiminy</HeroH1>
        <HeroP>I am a digital health care assistant designed
          to help you document and understand your health.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='/signup'>
            Sign Up!
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
