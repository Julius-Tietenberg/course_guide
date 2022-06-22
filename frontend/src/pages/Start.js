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
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from '../store/features/loginSlice'


// tab items
function TabPanel (props) {
  const { children, value, index } = props

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
        main: '#61af82',
        contrastText: '#221f1f',
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
  const login = () => {
    navigate("/login")
  }

  //test store
  const { list, totals } = useSelector(store => store.movie)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(loadData())
  }, [])

  return (
    <Box sx={{ width: '100%' }} minWidth="ms" >
      <CssBaseline />
      {/* tab bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }} >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img className="login-logo" src={logo} alt="" style={{ width: "50px", marginTop: "5px" }} />
          <span style={{
            fontStyle: "oblique",
            fontSize: "larger",
            fontWeight: "lighter",
            paddingLeft: "15px"
          }
          }>Course Guide</span>
        </Box>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor='inherit'
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#5ead8d'
            },
            '& .MuiTabs-flexContainer': {
              justifyContent: 'flex-end',
              color: '#5ead8d'
            }
          }}
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Team" {...a11yProps(1)} />
          <Tab label="Register" {...a11yProps(3)} />
          {/* start button, link to login page */}
          <ThemeProvider theme={buttonTheme} >
            <Button variant="contained"
              sx={{ fontWeight: "bold", border: "2px solid black", m: "5px 10px 0 10px", minWidth: "80px" }}
              onClick={login}>
              Get Start
            </Button>
          </ThemeProvider>
        </Tabs>
      </Box>
      {/* About */}
      <TabPanel value={tabValue} index={0}>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: '10%', mr: '10%', mt: '5%' }}>
          <Container>
            <Typography variant='h3'>
              Welcome to CourseGuide</Typography>
            <Typography variant='h6' > Rate your courses</Typography>
            <Typography variant='h6' > Empower the newbies</Typography>
            <Typography variant='h6' > Share your experience</Typography>

            <ThemeProvider theme={buttonTheme} >
              <Button variant="contained" size='large'
                sx={{ fontWeight: "bold", m: 4, minWidth: "80px" }}
                onClick={login}>
                Get Start
              </Button>
            </ThemeProvider>
          </Container>
          <img src={startImg} alt="" />
        </Box>
      </TabPanel>
      {/* Team */}
      <TabPanel value={tabValue} index={1}>
        <Box>
          {list.map((item) => (
            <Typography key={item.tvId}>{item.name}</Typography>
          ))}
          <p>totals:{totals}</p>
        </Box>
      </TabPanel>
      {/* register */}
      <TabPanel value={tabValue} index={2} >
        <Register />
      </TabPanel>
    </Box >
  )
}

export default Start