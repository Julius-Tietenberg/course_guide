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
import { Tooltip } from '@mui/material'

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
  const [trigger, setTrigger] = React.useState(true)

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
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
  }, [trigger, courseId, ratingStore])

  return (
    <Box sx={{ p: "15px" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "10px", paddingTop: "5px", mb:"8px"}} variant="h5">Student Ratings</Typography>
        <Tooltip title="Click here to add your own rating for this course.">
          <IconButton sx={{ color: "white", bgcolor: "#BD6D61" }} onClick={handleClickOpen}><AddIcon /></IconButton>
        </Tooltip>
        {/* pop-up rating form */}
        <Dialog open={open} onClose={handleClose} scroll="body" >
          <RatingForm
            courseName={courseName}
            setOpen={setOpen}
            id={courseId}
            trigger={trigger}
            setTrigger={setTrigger} />
        </Dialog>
      </Stack>
      {/* user comment */}
      {ratingInfo.rating_messages?.map((item, index) => <CommentCard name={item.username} time={item.created_at} text={item.content} key={index} />)}
    </Box>
  )
}

export default RatingCard