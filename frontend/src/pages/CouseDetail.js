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

function CourseDetail () {
  const { courseStore } = useStore()
  const [courseInfo, setCourseInfo] = React.useState({})
  let [params] = useSearchParams()
  let id = params.get('id')

  React.useEffect(() => {
    const loadCouseInfo = async () => {
      const res = await courseStore.getCourseDetail(id)
      console.log(res)
      setCourseInfo(res)
    }
    loadCouseInfo()
  }, [id, courseStore])


  return (
    <Box sx={{ minWidth: "900px" }}>
      <HeadBar />
      <Box sx={{ p: "5%", bgcolor: "rgb(209 233 213 / 80%)" }}>
        {/* banner */}
        <Paper sx={{ p: "17px" }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Stack>
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "10px"}} variant="h4" >{courseInfo.name}</Typography>
              {courseInfo.persons?.map((item, index) => <Typography sx={{fontSmooth: "always", paddingLeft: "10px"}} variant="h5" key={index}>{item.name}</Typography>)}
            </Stack>
            <RatingIcon field="Student Rating" score={8.3} />
          </Stack>
        </Paper>
        {/* main area */}
        <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ mt: "20px" }}>
          {/* course info */}
          <Paper sx={{ minWidth: "40%" }}>
            <Stack sx={{ m: "15px" }}>
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "15px"}} variant="h5">Description</Typography>
              <Typography sx={{fontSmooth: "always", paddingLeft: "15px"}}>{courseInfo.description} </Typography>
              <Divider variant="middle" />
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "15px"}} variant="h5">Term</Typography ><Typography sx={{fontSmooth: "always", paddingLeft: "15px"}}>{courseInfo.semester}</Typography>
              <Divider variant="middle" />
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "15px"}} variant="h5">Type of Course</Typography><Typography sx={{fontSmooth: "always", paddingLeft: "15px"}}>{courseInfo.subject_type}</Typography>
              <Divider variant="middle" />
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "15px"}} variant="h5">Timeslot</Typography>
              {courseInfo.timetable?.map((item, index) => <Typography sx={{fontSmooth: "always", paddingLeft: "15px"}} key={index}>{item.day} {item.interval}</Typography>)}
              <Divider variant="middle" />
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "15px"}} variant="h5">Course Page </Typography>
              <Typography sx={{fontSmooth: "always", paddingLeft: "15px"}} component="a" href={courseInfo.url}>Send me to the university page!</Typography>

            </Stack>
          </Paper>
          {/* rating */}
          <Stack>
            <Paper>
              <Stack direction="row" spacing={1} sx={{ m: "15px", justifyContent: "space-around" }}>
                <RatingIcon field="Teaching" score={8.5} />
                <RatingIcon field="Learning" score={8.2} />
                <RatingIcon field="Wordload" score={5.7} />
                <RatingIcon field="Difficulty" score={1.5} />
              </Stack>
            </Paper>
            <Paper sx={{ mt: "20px" }}>
              <RatingCard courseName={courseInfo.name} />
            </Paper>
          </Stack>
        </Stack>
      </Box>
    </Box>)
}

export default CourseDetail