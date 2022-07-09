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
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* logo & title */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img className="login-logo" src={logo} alt=" " style={{ width: "50px", marginTop: "5px" }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontStyle: "oblique",
                fontSize: "larger",
                fontWeight: "lighter",
                paddingLeft: "15px"
              }}
            >
              Course Guide
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {hiddenButton !== 'find' && <Button
              sx={{ mr: "10%", fontWeight: "bold" }}
              onClick={handleFindCourses}>
              Find Courses</Button>}
            {hiddenButton !== 'my' && <Button
              sx={{ mr: "10%", fontWeight: "bold" }}
              onClick={handleMyCourses}>My Courses</Button>}
            <Typography sx={{ mr: "3%" }}>{username}</Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar >{username.charAt(0).toUpperCase()}</Avatar>
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