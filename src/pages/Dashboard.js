import { Button, CssBaseline, Grid, Typography} from '@mui/material'
// import { Dashboard as MuiDashboardIcon } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout clicked");
    navigate('/login')
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={4} sx={{backgroundColor:'gray', p: 5, color: 'white' }}>
          {/* <MuiDashboardIcon /> */}
          <h1>Dashboard</h1>
          <Typography variant='h5'>Email: sarvo@example.com</Typography>
          <Typography variant='h6'>Name: sarvottam hengaju</Typography>
          <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{mt:8}} >Logout</Button>
        </Grid>
        <Grid item sm={8}>
          <ChangePassword/>
        </Grid>
      </Grid>
    </>
  )
}

export default Dashboard
