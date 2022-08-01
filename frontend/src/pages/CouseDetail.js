import * as React from 'react'
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Paper from '@mui/material/Paper'
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import HeadBar from "../components/HeadBar"
import RatingCard from '../components/RatingCard'
import RatingIcon from '../components/RatingIcon'
import { useSearchParams } from "react-router-dom"
import { useStore } from "../store"
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert (props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function CourseDetail () {
  const { courseStore, userStore } = useStore()
  const [courseInfo, setCourseInfo] = React.useState({})
  const [trigger, setTrigger] = React.useState(true)
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)
  const [error, setError] = React.useState('')
  let [params] = useSearchParams()
  let id = params.get('id')

  React.useEffect(() => {
    const loadCouseInfo = async () => {
      const res = await courseStore.getCourseDetail(id)
      setCourseInfo(res)
    }
    loadCouseInfo()
  }, [trigger, id, courseStore])

  const handleAddCourse = async () => {
    try {
      await userStore.addCourse(id)
      setSnackbarOpen(true)
      console.log('detail add success')
    } catch (e) {
      setError(e.response.data.message)
      setSnackbarOpen(true)
    }
  }

  // close snackbar
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarOpen(false)
  }
  return (
    <Box sx={{ minWidth: "900px" }}>
      {/* add course notification */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        {/* If an error is caught, an error message is displayed, otherwise show success */}
        {error ? <Alert severity="error">{error}</Alert> : <Alert severity="success">Add successfully</Alert>}
      </Snackbar>
      <HeadBar />
      <Box sx={{ p: "5%", bgcolor: "rgb(25 118 210 / 8%)" }}>
        {/* banner */}
        <Paper sx={{ p: "10px" }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSmooth: "always", pl: "10px" }} variant="h5" >{courseInfo.name}</Typography>
              {courseInfo.persons?.map((item, index) => <Typography sx={{ fontSmooth: "always", pl: "10px" }} variant="h6" key={index}>{item.name}</Typography>)}
            </Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <Button variant='outlined' onClick={handleAddCourse}>Add to my courses</Button>
              <RatingIcon field="Overall Rating" score={courseInfo.rating} />
            </Stack>
          </Stack>
        </Paper>
        {/* main area */}
        <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ mt: "20px" }}>
          {/* course info */}
          <Paper sx={{ minWidth: "40%" }}>
            <Stack sx={{ m: "10px" }}>
              <Typography
                sx={{ fontWeight: "bold", fontSmooth: "always", pl: "20px", pt: "10px", mb: "8px" }}
                variant="h5">Description
              </Typography>
              <Typography
                sx={{ fontSmooth: "always", pl: "30px", mb: "8px", textAlign: "justify", pr: "30px" }}>
                {courseInfo.description}
              </Typography>
              <Divider sx={{ mb: "10px" }} variant="middle" />
              <Typography
                sx={{ fontWeight: "bold", fontSmooth: "always", pl: "20px", mb: "8px" }}
                variant="h5">Learning Targets
              </Typography>
              <Typography
                sx={{ fontSmooth: "always", pl: "30px", mb: "8px", textAlign: "justify", pr: "30px" }}>
                {courseInfo.targets}
              </Typography>
              <Divider sx={{ mb: "10px" }} variant="middle" />
              <Typography
                sx={{ fontWeight: "bold", fontSmooth: "always", pl: "20px", mb: "8px" }}
                variant="h5">Semester
              </Typography>
              <Typography
                sx={{ fontSmooth: "always", pl: "30px", mb: "8px", textAlign: "justify", pr: "30px" }}>
                {courseInfo.semester}
              </Typography>
              <Divider sx={{ mb: "10px" }} variant="middle" />
              <Typography
                sx={{ fontWeight: "bold", fontSmooth: "always", pl: "20px", mb: "8px" }}
                variant="h5">Course Type
              </Typography>
              <Typography
                sx={{ fontSmooth: "always", pl: "30px", mb: "8px", textAlign: "justify", pr: "30px" }}>
                {courseInfo.subject_type}
              </Typography>
              <Divider sx={{ mb: "10px" }} variant="middle" />
              <Typography
                sx={{ fontWeight: "bold", fontSmooth: "always", pl: "20px", mb: "8px" }}
                variant="h5">Language
              </Typography>
              <Typography
                sx={{ fontSmooth: "always", pl: "30px", mb: "8px", textAlign: "justify", pr: "30px" }}>
                {courseInfo.language}
              </Typography>
              <Divider sx={{ mb: "10px" }} variant="middle" />
              <Typography
                sx={{ fontWeight: "bold", fontSmooth: "always", pl: "20px", mb: "8px" }}
                variant="h5">Timeslot
              </Typography>
              {courseInfo.timetable?.map((item, index) =>
                <Typography
                  sx={{ fontSmooth: "always", pl: "30px", mb: "8px", textAlign: "justify", pr: "30px" }}
                  key={index}>{item.day} {item.interval}
                </Typography>)}
              <Divider sx={{ mb: "10px" }} variant="middle" />
              <Typography
                sx={{ fontWeight: "bold", fontSmooth: "always", pl: "20px", mb: "8px" }}
                variant="h5">Course Page
              </Typography>
              <Typography
                sx={{ fontSmooth: "always", pl: "30px", pb: "10px", mb: "8px", textAlign: "justify", pr: "30px", fontStyle: 'oblique' }}
                component="a" href={courseInfo.url}>
                link to university page!
              </Typography>
            </Stack>
          </Paper>
          {/* rating */}
          <Stack>
            {/* rating banner */}
            <Paper sx={{ p: "10px" }}>
              <Stack direction="row" spacing={2} sx={{ m: "5px", justifyContent: "space-around" }}>
                <RatingIcon field="Teaching" score={courseInfo.stars?.teacher} />
                <RatingIcon field="Learning" score={courseInfo.stars?.learning} />
                <RatingIcon field="Workload" score={courseInfo.stars?.workload} />
                <RatingIcon field="Difficulty" score={courseInfo.stars?.difficulty} />
              </Stack>
            </Paper>
            {/* rating card */}
            <Paper sx={{ mt: "20px" }}>
              <RatingCard
                courseName={courseInfo.name}
                courseId={id}
                trigger={trigger}
                setTrigger={setTrigger}
              />
            </Paper>
          </Stack>
        </Stack>
      </Box>
    </Box>)
}

export default CourseDetail