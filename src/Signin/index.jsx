import React from 'react'
import { 
  Container, 
  FormWrap, 
  Icon, 
  FormContent, 
  Form, 
  FormInput, 
  FormH1, 
  FormLabel, 
  FormButton, 
  RButton, 
} from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Jiminy</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <br /><br />
              <FormLabel>Don't Have an Account?<RButton to='/signup'>Register Here!</RButton></FormLabel>
            </Form>
            
          </FormContent>
        </FormWrap>
        
        
      </Container>
    </>
  )
}

export default SignIn
