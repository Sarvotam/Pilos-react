import {TextField, Button, Box, Alert} from '@mui/material'
import { NavLink } from 'react-router-dom'

// import React from 'react'

const UserRegister = () => {
    return (
        <>
          <Box component='form' noValidate sx={{ mt: 1}} id='login-form'>
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
            <TextField margin='normal' required fullWidth id='UserName' name='User Name' label='User Name' />

            <TextField margin='normal' required fullWidth id='password' name='password' label='password' type='password' />
            <TextField margin='normal' required fullWidth id='password confirmation ' name='password confirmation' label='password confirmation' type='password confirmation' />

            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{ mt:3, mb: 2, px: 5}} >Register</Button>
            </Box>
          </Box>
        </>
      )
}

export default UserRegister
