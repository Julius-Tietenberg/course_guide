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
import Pagination from "@mui/material/Pagination"
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useStore } from '../store'


function CourseOverview () {
  const { courseStore } = useStore()

  const [page, setPage] = React.useState(1)
  const [searchValue, setSearchValue] = React.useState('')
  const [totalPages, setTotalPages] = React.useState()
  const [searchType, setSearchType] = React.useState('courseName')
  const handleTypeChange = (event) => {
    console.log(event.target.value)
    setSearchType(event.target.value)
  }
  const handlePageChange = (event, value) => {
    setPage(value)
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 300)

  }
  const handleSearch = (event) => {
    console.log(event.target.value)
    event.preventDefault()
    setSearchValue(event.target.value)
  }

  const [courseList, setCourseList] = React.useState([])
  React.useEffect(() => {
    const loadCourseList = async () => {
      let res
      if (searchType === 'courseName') {
        res = await courseStore.getAllCourse(page, searchValue)
      } else {
        res = await courseStore.getAllCourse(page, '', searchValue)
      }
      console.log(res)
      setCourseList(res.content)
      setTotalPages(res.totalPages)
    }
    loadCourseList()
  }, [page, searchValue, searchType, courseStore])


  return (
    <Box>
      <HeadBar hiddenButton={'find'} />
      <Box sx={{ backgroundColor: "rgb(25 118 210 / 8%)", pt: "20px" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={3}>
            <Typography variant="h5">Study Program Courses</Typography>
          </Grid>
          <Grid item xs={5}>
            {/* search box */}
            <TextField
              name="search"
              margin="normal"
              placeholder="Find Courses"
              fullWidth
              onChange={handleSearch}
              sx={{
                '& .MuiOutlinedInput-root': {
                  paddingRight: '0'
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Select
                      size="large"
                      value={searchType}
                      onChange={handleTypeChange}
                      sx={{ borderRadius: " 0 4px 4px 0" }}
                    >
                      <MenuItem value="courseName">course name</MenuItem>
                      <MenuItem value="profName">professor name</MenuItem>
                    </Select>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={2}>
            {/* <Button variant="contained" color="info" sx={{ ml: "15px", mt: "10px" }}>Filter</Button> */}
            <Button variant="contained" color="info" sx={{ ml: "15px", mt: "10px" }}>Sort</Button>
          </Grid>
        </Grid>
        {/* CourseCard */}
        <Box sx={{ flexGrow: 1, p: "3%" }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
            {courseList.map((item) => (
              <Grid item xs={2} sm={3} md={4} key={item.id}>
                <CourseCard
                  id={item.id}
                  name={item.name}
                  prof={item.persons.map(item => (item.name))}
                  language={item.language} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Pagination count={totalPages} page={page} onChange={handlePageChange} sx={{ display: "flex", justifyContent: "center", pb: "20px" }} />
      </Box>
    </Box>
  )
}

export default CourseOverview