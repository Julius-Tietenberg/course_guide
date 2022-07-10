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

const Alert = React.forwardRef(function Alert (props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function CourseCard (props) {
  const { name, prof, language, id, rating, added, trigger, setTrigger } = props
  const { userStore } = useStore()
  const navigate = useNavigate()
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)
  const [error, setError] = React.useState('')

  const goCourseDetail = () => navigate(`/course?id=${id}`)

  const handleAdd = async () => {
    try {
      await userStore.addCourse(id)
      setSnackbarOpen(true)
      console.log('add success')
    } catch (e) {
      console.log(e)
      setError(e.response.data.message)
      setSnackbarOpen(true)
    }
  }

  const handleRemove = async () => {
    try {
      await userStore.removeCourse(id)
      console.log('remove success')
    } catch (e) {
      console.log(e)
      console.log(e)
    }
    setTrigger(!trigger)
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
        {/* <Alert severity="success">Add successfully</Alert> */}
        {error ? <Alert severity="error">{error}</Alert> : <Alert severity="success">Add successfully</Alert>}
      </Snackbar>
      <Box sx={{ p: "10px 5px 0 0" }}>
        <RatingIcon field="Student Rating" score={rating} />
      </Box>
      <CardActionArea sx={{ height: "180px" }} onClick={goCourseDetail}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {prof.map((item, index) => <Typography variant="body2" color="text.secondary" key={index}>{item}</Typography>)}
          <Typography variant="body2" color="text.secondary">
            language: {language}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        {added === true ?
          <Button size="small" onClick={handleRemove}>remove</Button> :
          <Button size="small" onClick={handleAdd} >add to my course</Button>}
      </CardActions>
    </Card>
  )
}
export default CourseCard