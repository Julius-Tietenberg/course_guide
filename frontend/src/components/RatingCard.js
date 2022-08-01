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
import Pagination from '@mui/material/Pagination'
import { useStore } from '../store'
import moment from 'moment-timezone'

function CommentCard (props) {
  const { name, time, text } = props

  return (
    <Box sx={{ m: "5px" }}>
      <Typography component="span" variant="subtitle1">{name}  </Typography>
      <Typography component="span" variant="caption">
        {moment.tz(time, 'Europe/Berlin').format('lll')}
      </Typography>
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
  const { courseName, courseId, trigger, setTrigger } = props
  const [page, setPage] = React.useState(1)
  const [totalPages, setTotalPages] = React.useState()
  const [totalItems, setTotalItems] = React.useState()

  const handlePageChange = (event, value) => {
    setPage(value)
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 300)
  }

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  React.useEffect(() => {
    const loadRatingInfo = async () => {
      const res = await ratingStore.getRatingMessage(courseId, page)
      setRatingInfo(res.content)
      setTotalPages(res.totalPages)
      setTotalItems(res.totalItems)
    }
    loadRatingInfo()
  }, [trigger, page, courseId, ratingStore])

  return (
    <Box sx={{ p: "10px" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          sx={{ fontWeight: "bold", fontSmooth: "always", pl: "10px", pt: "5px", mb: "8px" }}
          variant="h5">Student Ratings
        </Typography>
        <IconButton sx={{ color: "#5dac90" }} onClick={handleClickOpen}><AddIcon /></IconButton>
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
      <Stack  >
        {ratingInfo.rating_messages?.map((item, index) =>
          <CommentCard name={item.username} time={item.created_at} text={item.content} key={index} />)}
        {totalItems >= 6 &&
          <Pagination count={totalPages} page={page} onChange={handlePageChange}
            sx={{ mt: "5px", display: "flex", justifyContent: "center" }} />}
      </Stack>
    </Box>
  )
}

export default RatingCard