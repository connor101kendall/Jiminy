import React from 'react'
import { useState } from 'react'
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
  const [data, setData] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:""
  })

  const handleChange =(e)=>{
    setData({ ...data, [e.target.name]: e.target.value});

    console.log(data)
  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Jiminy</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Register an Account!</FormH1>
              <FormLabel htmlFor='for'>First Name</FormLabel>
                <FormInput htmlFor='first_name' required 
                onChange={handleChange} value={data.first_name}/>
                <FormLabel htmlFor='for'>Last Name</FormLabel>
                <FormInput htmlFor='last_name' required 
                onChange={handleChange} value={data.last_name}/>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required 
                onChange={handleChange} value={data.email}/>
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required 
                onChange={handleChange} value={data.password}/>
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
