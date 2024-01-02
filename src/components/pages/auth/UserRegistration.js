import {Grid, Card, Typography, Tabs, Tab, Box} from '@mui/material'
import Img4 from '../../../images/img4.png'
import { useState } from 'react';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';

const TabPanel = (props) => {
	const {children, value, index} = props;
	return(
		<div role='tabpanel' hidden={value !== index}>
			{
				value === index && (<Box>{children}</Box>)
			}
		</div>
	)
}

const UserRegistration = () => {
	const [value, setValue] = useState(0)
	const handleChange = (event, newValue) => {
		setValue(newValue);
	}
  return (
    <div>
      <Grid container sx={{height:'90vh'}}>
        <Grid item lg={7} sm={5} sx={{
					backgroundImage:`url(${Img4})`,
					backgroundRepeat:'no-repeat',
					backgroundSize:'cover',
					backgroundPosition:'center',
					display:{xs:'none', sm: 'block'}
				}}>
        </Grid>
				<Grid item lg={5} sm={7} xs={12} sx={{}}>
					<Card sx={{width:'100%', height:'100%'}}>
						<Box>
							<Box sx={{borderBottom:1, borderColor:'divider'}}>
								<Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
									<Tab label='Login' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
									<Tab label='Registration' sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
								</Tabs>
							</Box>
							<TabPanel value={value} index={0}>
								<UserLogin />
							</TabPanel>
							<TabPanel value={value} index={1}>
								<UserRegister />
							</TabPanel>
						</Box>
					</Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default UserRegistration
