import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import RatingIcon from './RatingIcon'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'
import { useStore } from '../store'
import { Tooltip } from '@mui/material'

const Alert = React.forwardRef(function Alert (props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function CourseCard (props) {
  const { name, prof, language, id, rating, added } = props
  const { userStore } = useStore()
  const navigate = useNavigate()
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)

  const goCourseDetail = () => navigate(`/course?id=${id}`)

  const handleAdd = async () => {
    try {
      await userStore.addCourse(id)
      setSnackbarOpen(true)
      console.log('add success')
    } catch (e) {
      console.log(e)
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
    <Card>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        {/* If an error is caught, an error message is displayed, otherwise show success */}
        <Alert severity="success">Added successfully</Alert>
      </Snackbar>
      <Box sx={{ p: "15px 15px 0 0" }}>
        <RatingIcon field="Student Rating" score={rating} />
      </Box>
      <CardActionArea sx={{ height: "180px" }} onClick={goCourseDetail}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
          sx={{
            fontWeight: "bold",
            fontSmooth: "always",
            paddingLeft: "5px", 
            fontSizeAdjust:".58"
          }}
          >
            {name}
          </Typography>
          {prof.map((item, index) => <Typography sx={{paddingLeft: "5px", fontSmooth: "always", fontSizeAdjust:".65"}} variant="subtitle1" color="text.secondary" key={index}>{item}</Typography>)}
          <Typography  sx={{paddingLeft: "5px", fontSmooth: "always", fontSizeAdjust:".65"}} variant="subtitle1" color="text.secondary">
          Language: {language}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        {added === true ?

          <Tooltip title="Remove this course from your courses.">
            <Button sx={{ color: "#9e4e42" }} size="small">remove</Button> 
          </Tooltip>
            :
          <Tooltip title="You can find added courses on your personal dashboard.">
          <Button size="small" onClick={handleAdd} >add to my courses</Button>
          </Tooltip>
          }
          

      </CardActions>
    </Card>
  )
}
export default CourseCard