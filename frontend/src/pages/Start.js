import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import logo from '../assent/logo.png'
import startImg from '../assent/start.png'
import Register from './Register'
import { getToken } from '../utils'


// tab items
function TabPanel (props) {
  const { children, value, index } = props
  console.log('value:' + value, 'index:' + index)
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box >
          {children}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function Start () {
  //theme for start button
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: '#5dac90',
        contrastText: '#fff',
      },
    },
  })

  const [tabValue, setTabValue] = React.useState(0)

  //lable change
  const handleChange = (event, newValue) => {
    setTabValue(newValue)
  }

  // go to login page
  const navigate = useNavigate()
  const isToken = getToken()
  const login = () => {
    if (isToken) {
      navigate("/")
    } else {
      navigate("/login")
    }
  }

  return (
    <Box sx={{ width: '100%' }} minWidth="ms" >
      <CssBaseline />
      {/* tab bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '0 5%' }} >
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: "20px"}}>
          <img className="login-logo" src={logo} alt="" style={{ width: "80px"}} />
          <Typography  sx={{
                fontStyle: "oblique",
                paddingLeft:"10px",
                color: "#2d6a4f",
                fontSizeAdjust:"1",
                variant:"h5"
              }}
          >CourseGuide</Typography>
        </Box>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor='inherit'
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#5dac90'
            },
            '& .MuiTabs-flexContainer': {
              justifyContent: 'flex-end',
              color: '#5dac90'
            }
          }}
        >
          <Tab label="About" {...a11yProps(0)} />
          {/* <Tab label="Team" {...a11yProps(1)} /> */}
          <Tab label="Register" {...a11yProps(1)} />
          {/* start button, link to login page */}
          <ThemeProvider theme={buttonTheme} >
            <Button variant="contained"
              sx={{ fontWeight: "bold", m: "5px 10px 0 10px", minWidth: "80px" }}
              onClick={login}>
              Get Started
            </Button>
          </ThemeProvider>
        </Tabs>
      </Box>
      {/* About */}
      <TabPanel value={tabValue} index={0}>
        <Box sx={{ display: 'flex', alignItems: 'center', m: '0 10%', mr: '10%', }}>
          <Container>
            <Typography  variant='h3'>
              Welcome to CourseGuide</Typography>
            <Typography variant='h5' > Rate your courses</Typography>
            <Typography variant='h5' > Empower the newbies</Typography>
            <Typography variant='h5' > Share your experience</Typography>

            <ThemeProvider theme={buttonTheme} >
              <Button variant="contained" size='large'
                sx={{ fontWeight: "bold", mt: 4, minWidth: "80px" }}
                onClick={login}>
                LogIn
              </Button>
            </ThemeProvider>
          </Container>
          <img src={startImg} alt="" style={{ height: "550px" }} />
        </Box>
      </TabPanel>
      {/* Team */}
      {/* <TabPanel value={tabValue} index={1}>
        Team
      </TabPanel> */}
      {/* register */}
      <TabPanel value={tabValue} index={1} >
        <Register />
      </TabPanel>
    </Box >
  )
}

export default Start