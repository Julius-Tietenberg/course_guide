import HeadBar from "../components/HeadBar"
import CourseCard from "../components/CourseCard"
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Pagination from "@mui/material/Pagination"
import Paper from "@mui/material/Paper"

import { useStore } from '../store'



function UserDashboard () {
  const [page, setPage] = React.useState(1)

 
  
  return (
    <>
      <HeadBar/>
      <Grid container columnGap={4} rowGap={4} style={{ backgroundColor: "rgb(25 118 210 / 25%)", paddingTop: "50px", paddingLeft: "60px"}}>
        
        <Grid item md={7.5} xs={12} display="flex" justifyContent="center" alignItems="center" height="80px" sx={{backgroundColor: "white", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ml: "40px"}}>My Courses</Typography>
            <Button variant="contained" color="info" sx={{ mr: "-700px" }}>Filter</Button>
            <Button variant="contained" color="info" sx={{ mr: "80px" }}>Sort</Button>
        </Grid>
            

          <Grid item md={4} xs={12} display="flex" justifyContent="center" alignItems="center" sx={{backgroundColor: "white", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ml: "40px"}}>My Profile</Typography>
            <Button variant="contained" color="info" sx={{mr: "30px"}}>Edit Profile</Button>
          </Grid>

          {/*Placeholder for Cardboards later*/}
          <Grid container gap={4} md={7.5} xs={12} display="flex" justifyContent="space-between">
              <Grid item>
               <Paper style={{height: 250, width: 500, backgroundColor: "grey"}}>Placeholder</Paper>
              </Grid>
              <Grid item>
               <Paper style={{height: 250, width: 500, backgroundColor: "grey"}}>Placeholder</Paper>
              </Grid>
              <Grid item>
               <Paper style={{height: 250, width: 500, backgroundColor: "grey"}}>Placeholder</Paper>
              </Grid>
              <Grid item>
               <Paper style={{height: 250, width: 500, backgroundColor: "grey"}}>Placeholder</Paper>
              </Grid>
              <Grid item>
               <Paper style={{height: 250, width: 500, backgroundColor: "grey"}}>Placeholder</Paper>
              </Grid>
              <Grid item>
                
              </Grid> 
          </Grid>
          
              <Grid item md={4} xs={12} sx={{backgroundColor: "white"}}>
                <Typography variant="h5">
                Username
                FirstName
                </Typography>
              </Grid>    
        
        <Pagination page={page} sx={{ display: "flex", justifyContent: "center", pb: "20px" }} />
      </Grid>
    </>
  )
}

export default UserDashboard;