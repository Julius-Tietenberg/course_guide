import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import { Card, CardContent } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assent/logo.png'
import { useStore } from '../store'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert (props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function Login () {
  const { loginStore } = useStore()
  const navigate = useNavigate()
  const [error, setError] = React.useState('')
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    /*  console.log({
       email: data.get('username'),
       password: data.get('password'),
       remember: data.get('remember')
     }) */

    // login function
    try {
      await loginStore.login({
        username: data.get('username'),
        password: data.get('password'),
      })
      // Prompt to user login successfully
      setSnackbarOpen(true)
      // go to CourseOverview page
      setTimeout(() => {
        navigate("/", { replace: true })
      }, 1000)
      // alert('Login successful')
    } catch (e) {
      // FIXME: should catch error
      if (e.response?.data?.message) {
        setError(e.response?.data?.message)
      } else {
        setError("Login failed, please try again")
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
  }

  // show password
  const [showPassword, setShowPassword] = React.useState(false)
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        {/* If an error is caught, an error message is displayed, otherwise show success */}
        {error ? <Alert severity="error">{error}</Alert> : <Alert severity="success">Login successfully</Alert>}
      </Snackbar>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img className="login-logo" src={logo} alt="" style={{ width: "50px" }} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                name="username"
                margin="normal"
                required
                fullWidth
                label="Username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                name="password"
                margin="normal"
                required
                fullWidth
                label="Password"
                type={!showPassword ? "password" : "text"}
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (<InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>)
                }}


              />

              <Grid container justifyContent="flex-end">
                <a href="#javascript" variant="body2">
                  Forgot password?
                </a>
              </Grid>
              <FormControlLabel
                control={<Checkbox name="remember" value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Grid container justifyContent="center">
                <Grid item>
                  Don't have an account?
                  <Link to={"/register"} variant="body2">
                    Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default Login