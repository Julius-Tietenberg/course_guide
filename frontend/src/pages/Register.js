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
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assent/logo.png'
import { useStore } from '../store'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert (props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function Register () {
  const { registerStore } = useStore()
  const navigate = useNavigate()
  const [error, setError] = React.useState('')
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    // register function
    try {
      await registerStore.register({
        firstName: data.get('firstname'),
        lastName: data.get('lastname'),
        username: data.get('username'),
        school: data.get('university'),
        position: data.get('position'),
        email: data.get('email'),
        password: data.get('password'),
      })
      // Prompt to user register successfully
      setSnackbarOpen(true)
      // go to login page after 2s
      setTimeout(() => {
        navigate("/login", { replace: true })
      }, 2000)
    }
    //catch error 
    catch (e) {
      if (e.response?.data?.message) {
        setError(e.response?.data?.message)
      } else {
        setError("Register failed, please try again")
      }
      // Prompt to user error message
      setSnackbarOpen(true)
    }
  }
  // close snackbar
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarOpen(false)
    // clear error message
    setTimeout(() => {
      setError('')
    }, 1000)
  }
  //  value of select type input
  const [university, setUniversity] = React.useState('')
  const handleUniversityChange = (event) => {
    setUniversity(event.target.value)
  }

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* message info */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        {/* If an error is caught, an error message is displayed, otherwise show success */}
        {error ? <Alert severity="error">{error}</Alert> : <Alert severity="success">Register successfully</Alert>}
      </Snackbar>
      <Box
        sx={{
          mt: 4,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img className="login-logo" src={logo} alt="" style={{ width: "70px" }} />
        <Typography variant="h5" >
          Registration
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
                    label="Username (visible for other users)"
                    name="username"
                    autoComplete="username"
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
                    {/* <MenuItem value={"Other"}>Others</MenuItem> */}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    select
                    label="Position"
                    name="position"
                    value="student"
                  >
                    <MenuItem value={"student"}>Student</MenuItem>
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
                    inputProps={{
                      pattern: "[^\r\n\t\f\v ]+@[^\r\n\t\f\v ]*uni-due.de",
                      title: "Please enter valid university email,with the suffix uni-due.de"
                    }}
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

              <Grid container justifyContent="center">
                <Typography>
                  Already have an account? <Link to={"/login"} variant="body2">
                    Login Now!
                  </Link>
                </Typography>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>

    </Container>
  )
}
export default Register