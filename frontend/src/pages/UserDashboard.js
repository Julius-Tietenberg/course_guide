import * as React from 'react'
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import HeadBar from "../components/HeadBar"
import Button from "@mui/material/Button"
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import CourseCard from "../components/CourseCard"
import { useStore } from "../store"
import { Container } from '@mui/system'

function UserDashboard () {
  const { courseStore, userStore } = useStore()
  const [courseList, setCourseList] = React.useState([])
  const [sortType, setSortType] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [username, setUsername] = React.useState('')
  const [firstname, setFirstname] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [school, setSchool] = React.useState('')

  // control edite form open
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  // set sort type
  const handleAsc = () => {
    setSortType('asc')
  }
  const handleDesc = () => {
    setSortType('desc')
  }
  const cleanSort = () => {
    setSortType('')
  }

  React.useEffect(() => {
    const loadCourseList = async () => {
      const res = await courseStore.getAllCourse(1, '', '', sortType)
      console.log(res)
      setCourseList(res.content)
    }
    loadCourseList()
  }, [sortType, courseStore])

  React.useEffect(() => {
    const loadUserInfo = async () => {
      const res = await userStore.getUserInfo()
      setUsername(res.username)
      setFirstname(res.firstname)
      setLastname(res.lastname)
      setEmail(res.email)
      setSchool(res.school)
    }
    loadUserInfo()
  }, [userStore])

  const handleProfileChange = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    try {
      await userStore.editeUserInfo({
        firstname: data.get('firstname'),
        lastname: data.get('lastname'),
        school: data.get('university'),
        email: data.get('email'),
      })
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Box sx={{ minWidth: "900px" }}>
      <HeadBar hiddenButton={'my'} />
      <Box sx={{ p: "5%", bgcolor: "rgb(25 118 210 / 8%)" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
          {/* my course */}
          <Grid item xs={8}>
            <Paper sx={{ p: "10px" }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Typography variant="h5" >My Courses</Typography>
                <Box>
                  <Button variant="contained" size="small" onClick={handleDesc}>Desc</Button>
                  <Button variant="contained" size="small" sx={{ m: "0 15px" }} onClick={handleAsc}>Asc</Button>
                  <Button variant="contained" size="small" onClick={cleanSort}>Clean</Button>
                </Box>
              </Stack>
            </Paper>
            <Grid container spacing={2} sx={{ mt: 0 }}>
              {courseList.map((item) => (
                <Grid item xs={6} key={item.id}>
                  <CourseCard
                    id={item.id}
                    name={item.name}
                    prof={item.persons.map(item => (item.name))}
                    language={item.language}
                    rating={item.rating}
                    added={true}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* my profile */}
          <Grid item xs={4}>
            <Paper sx={{ p: "10px", minWidth: "280px" }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Typography variant="h5" >My profile</Typography>
                <Button variant="outlined" onClick={handleClickOpen}>Edite Profile</Button>
                <Dialog open={open} onClose={handleClose} scroll="body" >
                  {/* edite profile form */}
                  <Box component="form" sx={{ p: "5%" }} onSubmit={handleProfileChange}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant='h5'>Edite Profile</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="username"
                          fullWidth
                          label="Username"
                          value={username}
                          disabled
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="firstname"
                          fullWidth
                          label="First Name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="lastname"
                          fullWidth
                          label="Last Name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="email"
                          type="email"
                          fullWidth
                          label="University Email Address"
                          inputProps={{
                            pattern: "[^\r\n\t\f\v ]+@[^\r\n\t\f\v ]*uni-due.de",
                            title: "Please enter valid university email,with the suffix uni-due.de"
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="scholl"
                          fullWidth
                          label="University"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >submit</Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Dialog>
              </Stack>
            </Paper>
            <Paper sx={{ p: "10px", minWidth: "280px", mt: "16px" }}>
              <Container sx={{ m: "10px 0" }}>
                <Typography >Username</Typography>
                <Typography variant="h6" color="#2a9d8f">{username}</Typography>
              </Container>
              <Container sx={{ m: "10px 0" }}>
                <Typography >First Name</Typography>
                <Typography variant="h6" color="#2a9d8f">{firstname}</Typography>
              </Container >
              <Container>
                <Typography >Last Name</Typography>
                <Typography variant="h6" color="#2a9d8f">{lastname}</Typography>
              </Container>
              <Container sx={{ m: "10px 0" }}>
                <Typography >E-mail</Typography>
                <Typography variant="h6" color="#2a9d8f" >{email}</Typography>
              </Container>
              <Container sx={{ m: "10px 0" }}>
                <Typography >University</Typography>
                <Typography variant='h6' color="#2a9d8f">{school}</Typography>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box >)
}

export default UserDashboard