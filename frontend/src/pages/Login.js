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
import { Link } from 'react-router-dom'
import logo from '../assent/logo.png'

function Login () {
  const handleSubmit = (event) => {
    console.log(event.target)
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      remember: data.get('remember')
    })
    // TODO: login function
  }
  // show password
  const [showPassword, setShowPassword] = React.useState(false)
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
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
                name="email"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                type="email"
                autoComplete="email"
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