import {TextField, FormControlLabel, Checkbox, Button, Box, Alert} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserRegister = () => {
	const [error, setError] = useState({
		status: false,
		msg: "",
		type: ""
	})

	const navigate = useNavigate();
		const handleSubmit = (e) => {
			e.preventDefault();
			// FormData Default from web api [ Could be solved through STATE as well]
			const data = new FormData(e.currentTarget);
			const actualData = {
				email: data.get('email'),
        name: data.get('name'),
				password: data.get('password'),
				password_confirmation: data.get('password_confirmation'),
        tc: data.get('tc'),
			}
			
			// work for validation
			if (actualData.email && actualData.password && actualData.name && actualData.tc !== null) {
				if(actualData.password === actualData.password_confirmation){
          console.log(actualData);
				// clear fields after submission complete
				document.getElementById('registration-form').reset()
				setError({status: true, msg:"Registration Success ", type: 'success'})
				navigate('/')
        }else{
          setError({status: true, msg: "Password and password confirmation doesnot match", type: 'error'})
        }
			} else {
				setError({ status: true, msg: "All fields are required", type: 'error' })
			}
		}
		return (
			<>
				<Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
					<TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
					<TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
					<TextField margin='normal' required fullWidth id='password' name='password' label='password' type='password' />
					<TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' />
          <FormControlLabel control={<Checkbox value="agree" color="primary" name='tc' id='tc' />} label="I agree to terms and condition." />
					<Box textAlign='center'>
						<Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} >Join</Button>
					</Box>
					{error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
				</Box>
			</>
		)
}

export default UserRegister
