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
import { Tooltip } from '@mui/material'

function CourseDetail () {
  const { courseStore, userStore } = useStore()
  const [courseInfo, setCourseInfo] = React.useState({})
  let [params] = useSearchParams()
  let id = params.get('id')

  React.useEffect(() => {
    const loadCouseInfo = async () => {
      const res = await courseStore.getCourseDetail(id)
      setCourseInfo(res)
    }
    loadCouseInfo()
  }, [id, courseStore])

  const handleAddCourse = async () => {
    try {
      await userStore.addCourse(id)
      console.log('detail add success')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Box sx={{ minWidth: "900px" }}>
      <HeadBar />
      <Box sx={{ p: "5%", bgcolor: "rgb(209 233 213 / 80%)" }}>
        {/* banner */}
        <Paper sx={{ p: "17px" }} elevation={3}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Box>
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "10px"}} variant="h4" >{courseInfo.name}</Typography>
              {courseInfo.persons?.map((item, index) => <Typography sx={{fontSmooth: "always", paddingLeft: "10px"}} variant="h5" key={index}>{item.name}</Typography>)}
            </Box>
            <Stack direction="row" spacing={4} alignItems="center">
              <Tooltip title="You can find all added courses on your personal dashboard.">
                <Button variant='outlined' size='medium' onClick={handleAddCourse}>Add to my courses</Button>
              </Tooltip>
              <RatingIcon field="Student Rating" score={courseInfo.rating} />
            </Stack>
          </Stack>
        </Paper>
        {/* main area */}
        <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ mt: "20px" }}>
          {/* course info */}
          <Paper sx={{ minWidth: "40%" }} elevation={3}>
            <Stack sx={{ m: "15px" }}>
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "20px", paddingTop: "10px", mb:"8px"}} variant="h5">Description</Typography>
              <Typography sx={{fontSmooth: "always", paddingLeft: "30px", mb:"8px" , textAlign:"justify", paddingRight: "30px"}}>{courseInfo.description} </Typography>
              <Divider sx={{mb:"10px"}} variant="middle" />
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "20px", mb:"8px"}} variant="h5">Learning Targets</Typography>
              <Typography sx={{fontSmooth: "always", paddingLeft: "30px", mb:"8px" , textAlign:"justify", paddingRight: "30px"}}>{courseInfo.targets} </Typography>
              <Divider sx={{mb:"10px"}} variant="middle" />
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "20px", mb:"8px"}} variant="h5">Semester</Typography>
              <Typography sx={{fontSmooth: "always", paddingLeft: "30px", mb:"8px", textAlign:"justify", paddingRight: "30px"}}>{courseInfo.semester}</Typography>
              <Divider sx={{mb:"10px"}} variant="middle" />
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "20px", mb:"8px"}} variant="h5">Course Type</Typography>
              <Typography sx={{fontSmooth: "always", paddingLeft: "30px", mb:"8px", textAlign:"justify", paddingRight: "30px"}}>{courseInfo.subject_type}</Typography>
              <Divider sx={{mb:"10px"}} variant="middle" />
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "20px", mb:"8px"}} variant="h5">Language</Typography>
              <Typography sx={{fontSmooth: "always", paddingLeft: "30px", mb:"8px", textAlign:"justify", paddingRight: "30px"}}>{courseInfo.language}</Typography>
              <Divider sx={{mb:"10px"}} variant="middle" />
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "20px", mb:"8px"}} variant="h5">Timeslot</Typography>
              {courseInfo.timetable?.map((item, index) => <Typography sx={{fontSmooth: "always", paddingLeft: "30px", mb:"8px", textAlign:"justify", paddingRight: "30px"}} key={index}>{item.day} {item.interval}</Typography>)}
              <Divider sx={{mb:"10px"}} variant="middle" />
              <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "20px", mb:"8px"}} variant="h5">Course Page </Typography>
              <Typography sx={{fontSmooth: "always", paddingLeft: "30px", paddingBottom: "10px", mb:"8px", textAlign:"justify", paddingRight: "30px"}} component="a" href={courseInfo.url}>
                  Send me to the university page!
              </Typography>

              

            </Stack>
          </Paper>
          {/* rating */}
          <Stack>
            <Paper sx={{ p: "15px" }} elevation={3}>
              <Stack direction="row" spacing={2} sx={{ m: "5px", justifyContent: "space-around" }}>
                <RatingIcon field="Teaching" score={courseInfo.stars?.teacher} />
                <RatingIcon field="Learning" score={courseInfo.stars?.learning} />
                <RatingIcon field="Wordload" score={courseInfo.stars?.workload} />
                <RatingIcon field="Difficulty" score={courseInfo.stars?.difficulty} />
              </Stack>
            </Paper >
            <Paper elevation={3} sx={{ mt: "20px" }}>
              <RatingCard courseName={courseInfo.name} courseId={id} />
            </Paper>
          </Stack>
        </Stack>
      </Box>
    </Box>)
}

export default CourseDetail