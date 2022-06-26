import HeadBar from "../components/HeadBar"
import CourseCard from "../components/CourseCard"
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { useStore } from '../store'


function CourseOverview () {
  const { courseStore } = useStore()
  const handleSearch = () => {

  }

  const [courseList, setCourseList] = React.useState([])
  React.useEffect(() => {
    const courseList = async () => {
      const res = await courseStore.getAllCourse()
      console.log(res)
      setCourseList(res.content)
    }
    courseList()
    //courseList()
  }, [courseStore])
  return (
    <>
      <HeadBar />
      <Box sx={{ backgroundColor: "rgb(25 118 210 / 8%)", pt: "20px" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={2}>
            <Typography variant="h4">Courses</Typography>
          </Grid>
          <Grid item xs={4}>
            <Box component="form" onSubmit={handleSearch} >
              <TextField
                name="search"
                margin="normal"
                placeholder="Find Courses"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" sx={{ ml: "15px" }}>Filter</Button>
            <Button variant="contained" sx={{ ml: "15px" }}>Sort</Button>
          </Grid>
        </Grid>

        <Box sx={{ flexGrow: 1, p: "3%" }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
            {courseList.map((item) => (
              <Grid item xs={2} sm={3} md={4} key={item.id}>
                <CourseCard
                  name={item.name}
                  prof={item.persons[0].name}
                  language={item.language} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CourseOverview