import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

const CourseCard = (props) => {
  const { name, prof, language } = props
  return (
    <Card >
      <CardActionArea sx={{ height: "180px" }}>
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
      <CardActions>
        <Button size="small" color="primary">
          add to my course
        </Button>
      </CardActions>
    </Card>
  )
}
export default CourseCard