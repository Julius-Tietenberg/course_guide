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
    <Box sx={{ height: '100%', width: '100%', backgroundColor:"white", backgroundImage:'linear-gradient(179deg, #FFFFFF 0%, #95d5b2 25%, #52b788 50%, #2d6a4f 75%, #174731 100%)' }} minWidth="ms"  >
      <CssBaseline />
      {/* tab bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '0 6%' }} >
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
          <Tab sx={{ fontWeight: "bold", m: "45px 10px 0 10px", minWidth: "130px" }} label="Register" {...a11yProps(1)} /> 
          {/* start button, link to login page */}
          <Button variant="contained"
            sx={{ fontWeight: "bold", m: "45px 60px 0 20px", minWidth: "130px" }}
            onClick={login}>
            LogIn
          </Button>
        </Tabs>
      </Box>
      {/* About */}
      <TabPanel value={tabValue} index={0}>
        <Box sx={{ display: 'flex', alignItems: 'center', m: '0 11%', mr: '13%', mt: '8%' }}>
          <Container sx={{mb: '18%' }}>
            <Typography sx={{ fontWeight:"bold", pb:"15px", color: 'white', textShadow: '4px 4px 16px #174731'}} variant='h3'>
              Welcome to CourseGuide...</Typography>
            <Typography sx={{ ml: '5%', pb:"8px", fontSizeAdjust:".65", fontStyle:"oblique", color: 'white', textShadow: '4px 4px 10px #174731'}} variant='h5' > Rate your courses</Typography>
            <Typography sx={{ ml: '5%', pb:"8px", fontSizeAdjust:".65", fontStyle:"oblique", color: 'white', textShadow: '4px 4px 10px #174731'}} variant='h5' > Empower the newbies</Typography>
            <Typography sx={{ ml: '5%', pb:"8px", fontSizeAdjust:".65", fontStyle:"oblique", color: 'white', textShadow: '4px 4px 10px #174731'}} variant='h5' > Share your experiences</Typography>

            
              <Button variant="outlined" size='large' 
                sx={{ ml: '15%', fontWeight: "bold", mt: 5, minWidth: "160px", minHeight: "58px", color: 'white', borderColor: 'white', borderWidth:'3px', fontSizeAdjust:".75", boxShadow: '4px 4px 12px #174731' }}
                onClick={login}>
                LogIn
              </Button>
  
          </Container>
          <Container style={{ height: "751px" }}>
            <img  src={startImg} alt="" style={{ height: "520px" }} />
          </Container>
          
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