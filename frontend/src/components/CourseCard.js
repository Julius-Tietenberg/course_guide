import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import RatingIcon from './RatingIcon'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'


const CourseCard = (props) => {
  const { name, prof, language, id } = props
  const navigate = useNavigate()

  const goCourseDetail = () => navigate(`/course?id=${id}`)

  return (
    <Card>
      <Box sx={{ p: "10px 5px 0 0" }}>
        <RatingIcon field="Student Rating" score={9.8} />
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
        <Button size="small" color="primary" >
          add to my course
        </Button>
      </CardActions>
    </Card>
  )
}
export default CourseCard