import * as React from 'react'
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent"
import Dialog from "@mui/material/Dialog"
import RatingForm from './RatingForm'
import AddIcon from '@mui/icons-material/Add'
import { useStore } from '../store'
import { getToken } from '../utils'

function CommentCard (props) {
  const { name, time, text } = props
  return (
    <Box sx={{ m: "5px" }}>
      <Typography component="span" variant="subtitle1">{name}  </Typography>
      <Typography component="span" variant="caption">{time}</Typography>
      <Card variant="outlined" sx={{ bgcolor: "rgb(25 118 210 / 8%)" }}>
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
      </Card>
    </Box>)
}


function RatingCard (props) {
  const { ratingStore } = useStore()
  const [ratingInfo, setRatingInfo] = React.useState({})
  const { courseName, courseId } = props

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    // loadRatingInfo()
    setOpen(false)
  }

  React.useEffect(() => {
    const token = getToken()
    const loadRatingInfo = async () => {
      const res = await ratingStore.getRatingMessage(courseId, token)
      console.log(res)
      setRatingInfo(res)
    }
    loadRatingInfo()
  }, [courseId, ratingStore])

  return (
    <Box sx={{ p: "10px" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Student Ratings</Typography>
        <IconButton sx={{ color: "#5dac90" }} onClick={handleClickOpen}><AddIcon /></IconButton>
        {/* pop-up rating form */}
        <Dialog open={open} onClose={handleClose} scroll="body" >
          <RatingForm courseName={courseName} setOpen={setOpen} id={courseId} />
        </Dialog>
      </Stack>
      {/* user comment */}
      {ratingInfo.rating_messages?.map((item, index) => <CommentCard name={item.id_user} time={item.created_at} text={item.content} key={index} />)}
    </Box>
  )
}

export default RatingCard