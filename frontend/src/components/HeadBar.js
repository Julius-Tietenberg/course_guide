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
  const [username, setUsername] = React.useState('')
  const { loginStore, userStore } = useStore()
  const navigate = useNavigate()

  React.useEffect(() => {
    const getUserName = async () => {
      const res = await userStore.getUserInfo()
      setUsername(res.username)
    }
    getUserName()
  }, [userStore])

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleDashboard = () => {
    navigate("/userdashboard")
  }

  const handlelogout = () => {
    loginStore.logout()
    navigate("/login")
  }
  const handleFindCourses = () => {
    navigate("/")
  }
  const handleMyCourses = () => {
    navigate("/userdashboard")
  }

  return (
    <AppBar position="static" color='transparent' >
      <Container maxWidth="xl">
        <Toolbar  sx={{ justifyContent: "space-between" }}>
          {/* logo & title */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img className="login-logo" src={logo} alt=" " style={{ width: "70px", margin: "6px"}} />
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
              sx={{ mr: "10%", fontWeight: "bold"}}
              onClick={handleFindCourses}>
              Find Courses</Button>}
            {hiddenButton !== 'my' && <Button
              sx={{ mr: "10%", fontWeight: "bold" }}
              onClick={handleMyCourses}>Dashboard</Button>}
            <Typography variant="subtitle1"sx={{ mr: "10%", ml: "10%" }}>{username}</Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{bgcolor: "#5dac90"}} >{username.charAt(0).toUpperCase()}</Avatar>
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
                <MenuItem key='dashboard' onClick={handleDashboard}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
                <MenuItem key='logout' onClick={handlelogout}>
                  <Typography textAlign="center">Logout</Typography>
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