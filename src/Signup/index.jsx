import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
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

   let history = useNavigate();

   const [data, setData] = useState({
     first_name:"",
     last_name:"",
     email:"",
     password:""
   })

   const handleChange =(e)=>{
    setData({ ...data, [e.target.name]: e.target.value});

    //console.log(data)
   }

   const submitForm=(e)=>{
    e.preventDefault();
    const sendData = {
      first_name:data.first_name,
      last_name:data.last_name,
      email:data.email,
      password:data.password
    }

    console.log(sendData);

    axios.post('http://localhost:3000/signup',sendData)
     .then((result)=>{
       if (result.data.Status === 'Invalid'){
       alert('Invalid User');
       } else {
         history('/');
     }})
   }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Jiminy</Icon>
          <FormContent>
            <Form onSubmit={submitForm}>
              <FormH1>Register an Account!</FormH1>
              <FormLabel htmlFor='for'>First Name</FormLabel>
                <FormInput type="text" name='first_name' required 
                onChange={handleChange} value={data.first_name}
                />
                <FormLabel htmlFor='for'>Last Name</FormLabel>
                <FormInput type="text" name='last_name' required 
                onChange={handleChange} value={data.last_name}
                />
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type="text" name='email' required 
                onChange={handleChange} value={data.email}
                />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type="text" name='password' required 
                onChange={handleChange} value={data.password}
                />
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
