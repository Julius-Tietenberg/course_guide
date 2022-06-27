import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { useNavigate } from 'react-router-dom'


const CourseCard = (props) => {
  const { name, prof, language, id } = props
  const navigate = useNavigate()

  const goCourseDetail = () => navigate(`/course/id=${id}`)

  return (
    <Card >
      <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end" sx={{ mr: "8px", mt: "5px" }}>
        <Typography variant="subtitle2" >
          Student Ratings
        </Typography>
        <Avatar sx={{ bgcolor: "#5dac90" }}>9.8</Avatar>
      </Stack>
      <CardActionArea sx={{ height: "180px" }} onClick={goCourseDetail}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prof}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            language: {language}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small" color="primary" >
          add to my course
        </Button>
      </CardActions>
    </Card>
  )
}
export default CourseCard