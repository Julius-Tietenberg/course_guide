import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
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
           {/*<Tab label="About" {...a11yProps(0)} /> */}
          {/* <Tab label="Team" {...a11yProps(1)} /> */}
          <Tab sx={{ fontWeight: "bold", m: "45px 10px 0 10px", minWidth: "110px" }} label="Register" {...a11yProps(1)} /> 
          {/* start button, link to login page */}
          <Button variant="contained"
            sx={{ fontWeight: "bold", m: "45px 60px 0 20px", minWidth: "110px" }}
            onClick={login}>
            LogIn
          </Button>
        </Tabs>
      </Box>
      {/* About */}
      <TabPanel value={tabValue} index={0}>
        <Box sx={{ display: 'flex', alignItems: 'center', m: '0 10%', mr: '12%', mt: '5%' }}>
          <Container>
            <Typography sx={{ fontWeight:"bold", pb:"15px"}} variant='h3'>
              Welcome to CourseGuide...</Typography>
            <Typography sx={{ pb:"8px", fontSizeAdjust:".65", fontStyle:"oblique"}} variant='h5' > Rate your courses</Typography>
            <Typography sx={{ pb:"8px", fontSizeAdjust:".65", fontStyle:"oblique"}} variant='h5' > Empower the newbies</Typography>
            <Typography sx={{ pb:"8px", fontSizeAdjust:".65", fontStyle:"oblique"}} variant='h5' > Share your experiences</Typography>

            
              <Button variant="contained" size='large'
                sx={{ fontWeight: "bold", mt: 5, minWidth: "80px" }}
                onClick={login}>
                LogIn
              </Button>
  
          </Container>
          <img src={startImg} alt="" style={{ height: "500px" }} />
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