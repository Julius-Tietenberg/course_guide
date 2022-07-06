import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import logo from '../assent/logo.png'
import { useStore } from '../store'
import { useNavigate } from 'react-router-dom'
import { color, fontFamily, fontStyle } from '@mui/system'


const HeadBar = (props) => {
  const { hiddenButton } = props
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const { loginStore } = useStore()
  const navigate = useNavigate()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleProfile = () => {
    console.log('handleProfile')
  }
  const handleAccount = () => {
    console.log('handleAccount')
  }
  const handleDashboard = () => {
    console.log('handleDashboard')
  }

  const handlelogout = () => {
    loginStore.logout()
    navigate("/login")
  }
  const handleFindCourses = () => {
    navigate("/")
  }
  const handleMyCourses = () => {

  }
  return (
    <AppBar position="static" color='transparent' >
      <Container maxWidth="xl">
        <Toolbar  sx={{ justifyContent: "space-between" }}>
          {/* logo & title */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img className="login-logo" src={logo} alt=" " style={{ width: "70px", margin: "8px"}} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontStyle: "oblique",
                color: "#2d6a4f",
                fontSizeAdjust:".65",
              }}
            >
              CourseGuide
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {hiddenButton !== 'find' && <Button
              sx={{ mr: "10%", color: "#61af82", fontWeight: "bold" }}
              onClick={handleFindCourses}>
              Find Courses</Button>}
            {hiddenButton !== 'my' && <Button
              sx={{ mr: "10%", color: "#61af82", fontWeight: "bold" }}
              onClick={handleMyCourses}>My Courses</Button>}
            <Typography variant="subtitle1"
            sx={{ mr: "3%" }}>Username</Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key='profile' onClick={handleProfile}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem key='account' onClick={handleAccount}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
                <MenuItem key='dashboard' onClick={handleDashboard}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
                <MenuItem key='logout' onClick={handlelogout}>
                  <Typography textAlign="center">logout</Typography>
                </MenuItem>

              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default HeadBar