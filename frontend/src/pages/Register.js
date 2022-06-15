import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assent/logo.jpg'


function Register () {

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      university: data.get('university'),
      email: data.get('email'),
      password: data.get('password'),
    })
    // TODO: register function
  }

  const [university, setUniversity] = React.useState('')
  const handleUniversityChange = (event) => {
    setUniversity(event.target.value)
  }

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img className="login-logo" src={logo} alt="" style={{ width: "50px" }} />
        <Typography variant="h5" >
          Sign up
        </Typography>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstname"
                    required
                    fullWidth
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Last Name"
                    name="lastname"
                    autoComplete="family-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    select
                    label="University"
                    name="university"
                    value={university}
                    onChange={handleUniversityChange}
                  >
                    <MenuItem value={"Duisburg - Essen"}>Duisburg-Essen University</MenuItem>
                    <MenuItem value={"Other"}>Others</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="University Email Address"
                    name="email"
                    autoComplete="email"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>

              <Grid container justifyContent="flex-end">
                Already have an account?
                <Link to={"/login"} variant="body2">
                  Sign in
                </Link>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>

    </Container>
  )
}
export default Register