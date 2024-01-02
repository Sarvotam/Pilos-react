import {TextField, Button, Box, Alert} from '@mui/material'
import { NavLink } from 'react-router-dom'

// import React from 'react'

const UserLogin = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		// FormData Default from web api [ Could be solved through STATE as well]
		const data = new FormData(e.currentTarget);
		const actualData ={
			email: data.get('email'),
			password: data.get('password'),
		}
		// work for validation
		if(actualData.email && actualData.password){
		console.log(actualData);
		// clear fields after submission complete
		document.getElementById('login-form').reset()
		}else{
		console.log("All fields are required");
		}
	}
  return (
    <>
      <Box component='form' noValidate sx={{ mt: 1}} id='login-form' onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
        <TextField margin='normal' required fullWidth id='password' name='password' label='password' type='password' />
        <Box textAlign='center'>
					<Button type='submit' variant='contained' sx={{ mt:3, mb: 2, px: 5}} >Login</Button>
        </Box>
				<NavLink to='/' >Forgot Password?</NavLink>
      </Box>
    </>
  )
}
export default UserLogin
