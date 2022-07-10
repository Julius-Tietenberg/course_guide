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
import Pagination from '@mui/material/Pagination'
import Container from '@mui/material/Container'
import CourseCard from "../components/CourseCard"
import { useStore } from "../store"

function UserDashboard () {
  const { userStore } = useStore()
  const [courseList, setCourseList] = React.useState([])
  const [trigger, setTrigger] = React.useState(true)
  const [page, setPage] = React.useState(1)
  const [totalPages, setTotalPages] = React.useState()
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
  /*   const handleAsc = () => {
      setSortType('asc')
    }
    const handleDesc = () => {
      setSortType('desc')
    }
    const cleanSort = () => {
      setSortType('')
    } */

  const handlePageChange = (event, value) => {
    setPage(value)
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 300)
  }

  React.useEffect(() => {
    const loadCourseList = async () => {
      const res = await userStore.getCourseList(page)
      setCourseList(res.content)
      setTotalPages(res.totalPages)
    }
    loadCourseList()
  }, [trigger, page, userStore])

  React.useEffect(() => {
    const loadUserInfo = async () => {
      const res = await userStore.getUserInfo()
      setUsername(res.username)
      setFirstname(res.firstName)
      setLastname(res.lastName)
      setEmail(res.email)
      setSchool(res.school)
    }
    loadUserInfo()
  }, [trigger, userStore])

  // edite profile function
  const handleProfileChange = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    try {
      await userStore.editeUserInfo({
        firstname: data.get('firstname'),
        lastname: data.get('lastname'),
        school: data.get('school'),
        // email: data.get('email'),
      })
    } catch (e) {
      console.log(e)
    }
    // control rerender DOM
    setTrigger(!trigger)
    setOpen(false)
  }
  return (
    <Box sx={{ minWidth: "900px" }}>
      <HeadBar hiddenButton={'my'} />
      <Box sx={{ p: "5%", bgcolor: "rgb(25 118 210 / 8%)" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
          {/* my course */}
          <Grid item xs={8}>
            <Paper sx={{ p: "15px" }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: "bold", pl: "10px" }} >My Courses</Typography>
                {/*                 <Box>
                  <Button variant="contained" size="small" onClick={handleDesc}>Desc</Button>
                  <Button variant="contained" size="small" sx={{ m: "0 15px" }} onClick={handleAsc}>Asc</Button>
                  <Button variant="contained" size="small" onClick={cleanSort}>Clean</Button>
                </Box> */}
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
                    trigger={trigger}
                    setTrigger={setTrigger}
                  />
                </Grid>
              ))}
              <Grid item xs={12} >
                <Pagination count={totalPages} page={page} onChange={handlePageChange} sx={{ display: "flex", justifyContent: "center" }} />
              </Grid>
            </Grid>
          </Grid>
          {/* my profile */}
          <Grid item xs={4}>
            <Paper sx={{ p: "15px", minWidth: "280px" }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: "bold", pl: "10px" }}>My Profile</Typography>
                <Button variant="outlined" onClick={handleClickOpen}>Edit Profile</Button>
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
                          required
                          label="University Email Address"
                          inputProps={{
                            pattern: "[^\r\n\t\f\v ]+@[^\r\n\t\f\v ]*uni-due.de",
                            title: "Please enter valid university email,with the suffix uni-due.de"
                          }}
                          disabled
                          value={email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="school"
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
                <Typography variant="overline">Username</Typography>
                <Typography variant="h6" color="#2a9d8f">{username}</Typography>
              </Container>
              <Container sx={{ m: "10px 0" }}>
                <Typography variant="overline">First Name</Typography>
                <Typography variant="h6" color="#2a9d8f">{firstname}</Typography>
              </Container >
              <Container>
                <Typography variant="overline">Last Name</Typography>
                <Typography variant="h6" color="#2a9d8f">{lastname}</Typography>
              </Container>
              <Container sx={{ m: "10px 0" }}>
                <Typography variant="overline">E-mail</Typography>
                <Typography variant="h6" color="#2a9d8f" >{email}</Typography>
              </Container>
              <Container sx={{ m: "10px 0" }}>
                <Typography variant="overline">University</Typography>
                <Typography variant='h6' color="#2a9d8f">{school}</Typography>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box >)
}

export default UserDashboard