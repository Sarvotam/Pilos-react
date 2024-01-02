// import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
			<Box sx={{flexGrow:1}}>
				<AppBar position="static" color="secondary">
					<Toolbar>
						<Typography variant='h5' conponent="div" sx={{flexGrow:1}}>
							Lipi-tech
						</Typography>
						<Button component={NavLink} to='/' style={({ isActive })=>{return{backgroundColor: isActive ? '#6d1b7b' : ''}}} 
																								sx={{color: 'white', textTransform:'none'}}>Home</Button>
						<Button component={NavLink} to='/Contact' style={({ isActive })=>{return{backgroundColor: isActive ? '#6d1b7b' : ''}}} 
																											sx={{color: 'white', textTransform:'none'}}>Contact</Button>
						<Button component={NavLink} to='/Login' style={({ isActive })=>{return{backgroundColor: isActive ? '#6d1b7b' : ''}}} 
																										sx={{color: 'white', textTransform:'none'}}>Login</Button>

					</Toolbar>
				</AppBar>
			</Box>
    </div>
  )
};

export default Navbar
