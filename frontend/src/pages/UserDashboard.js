import * as React from 'react'
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import HeadBar from "../components/HeadBar"
import Button from "@mui/material/Button"
import CourseCard from "../components/CourseCard"
import { useStore } from "../store"
import { Container } from '@mui/system'

function UserDashboard () {
  const { courseStore } = useStore()
  const [courseList, setCourseList] = React.useState([])
  React.useEffect(() => {
    const loadCourseList = async () => {
      const res = await courseStore.getAllCourse()
      console.log(res)
      setCourseList(res.content)
    }
    loadCourseList()
  }, [courseStore])
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
                <Button variant="contained">Sort</Button>
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
                <Button variant="outlined">Edite Profile</Button>
              </Stack>
            </Paper>
            <Paper sx={{ p: "10px", minWidth: "280px", mt: "16px" }}>
              <Container sx={{ m: "10px 0" }}>
                <Typography >Username</Typography>
                <Typography variant="h6" color="#2a9d8f">hast</Typography>
              </Container>
              <Container sx={{ m: "10px 0" }}>
                <Typography >First Name</Typography>
                <Typography variant="h6" color="#2a9d8f">Zhang</Typography>
              </Container >
              <Container>
                <Typography >Last Name</Typography>
                <Typography variant="h6" color="#2a9d8f">Qin</Typography>
              </Container>
              <Container sx={{ m: "10px 0" }}>
                <Typography >E-mail</Typography>
                <Typography variant="h6" color="#2a9d8f" >asdntyvjniuu@uni-ude.de</Typography>
              </Container>
              <Container sx={{ m: "10px 0" }}>
                <Typography >University</Typography>
                <Typography variant='h6' color="#2a9d8f">Duisburg-Essen</Typography>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box >)
}

export default UserDashboard