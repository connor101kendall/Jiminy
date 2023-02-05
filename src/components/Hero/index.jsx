import React from 'react'
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper, EmailLink } from './HeroElements'

function Hero (){
  return (
    <HeroContainer id='home'>
      <HeroContent>
        <HeroH1>Hi! I'm Jiminy</HeroH1>
        <HeroP>I am a digital health care assistant designed
          to help you document and understand your health.
        </HeroP>
        <HeroBtnWrapper>
          <EmailLink href="images/Connor_Kendall_Resume.pdf" download="Connor_Kendall_Resume.pdf">
            Sign Up
          </EmailLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
