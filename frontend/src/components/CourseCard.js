import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import RatingIcon from './RatingIcon'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/system'


const CourseCard = (props) => {
  const { name, prof, language, id } = props
  const navigate = useNavigate()

  const goCourseDetail = () => navigate(`/course?id=${id}`)

  return (
    <Card elevation={3} >
      <Box sx={{ p: "15px 15px 0 0" }}>
        <RatingIcon field="Student Rating" score={9.8} />
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
        <Button sx={{fontSmooth: "always"}}size="small" color="secondary" >
          add to my courses
        </Button>
      </CardActions>
    </Card>
  )
}
export default CourseCard