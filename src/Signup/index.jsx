import React from 'react'
import { 
  Container, 
  FormWrap, 
  Icon, 
  FormContent, Form, 
  FormInput, 
  FormH1, 
  FormLabel, 
  FormButton, 
  RButton, 
} from './SignupElements'

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Jiminy</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Register an Account!</FormH1>
              <FormLabel htmlFor='for'>First Name</FormLabel>
                <FormInput htmlFor='firstname' required />
                <FormLabel htmlFor='for'>Last Name</FormLabel>
                <FormInput htmlFor='lastname' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <br /><br />
              <FormLabel>Already Have an Account?<RButton to='/signin'>Sign In</RButton></FormLabel>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignUp
