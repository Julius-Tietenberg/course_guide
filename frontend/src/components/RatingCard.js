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
  const { courseName } = props
  const review = [
    { username: 'candy', time: '30.06.2022', text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos earum ullam ducimus blanditiis accusamus, perferendis, quae similique laboriosam quo, consequuntur magni dicta veniam voluptatum. Soluta rerum totam voluptate ab!' },
    { username: 'hola', time: '13.06.2022', text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos earum ullam ducimus blanditiis accusamus, perferendis, quae similique laboriosam quo, consequuntur magni dicta veniam voluptatum. Soluta rerum totam voluptate ab!' },
    { username: 'jack', time: '02.06.2022', text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos earum ullam ducimus blanditiis accusamus, perferendis, quae similique laboriosam quo, consequuntur magni dicta veniam voluptatum. Soluta rerum totam voluptate ab!' },
    { username: 'jack', time: '02.06.2022', text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos earum ullam ducimus blanditiis accusamus, perferendis, quae similique laboriosam quo, consequuntur magni dicta veniam voluptatum. Soluta rerum totam voluptate ab!' },
  ]

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ p: "15px" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{fontWeight: "bold", fontSmooth: "always", paddingLeft: "5px"}} variant="h6">Student Ratings</Typography>
        <Tooltip title="Click here to add your own rating for this course.">
          <IconButton sx={{ color: "#5dac90" }} onClick={handleClickOpen}><AddIcon /></IconButton>
        </Tooltip>
        {/* pop-up rating form */}
        <Dialog open={open} onClose={handleClose} scroll="body" >
          <RatingForm courseName={courseName} setOpen={setOpen} />
        </Dialog>
      </Stack>
      {/* user comment */}
      {review.map((item, index) => <CommentCard name={item.username} time={item.time} text={item.text} key={index} />)}
    </Box>
  )
}

export default RatingCard