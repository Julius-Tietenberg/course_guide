import * as React from 'react'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Box from '@mui/material/Box'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import RatingIcon from './RatingIcon'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useStore } from '../store'
import { getToken } from '../utils'

function RatingBar ({ name, value, setValue }) {
  const labels = {
    0.5: '0.5', 1: '1',
    1.5: '1.5', 2: '2',
    2.5: '2.5', 3: '3',
    3.5: '3.5', 4: '4',
    4.5: '4.5', 5: '5',
    5.5: '5.5', 6: '6',
    6.5: '6.5', 7: '7',
    7.5: '7.5', 8: '8',
    8.5: '8.5', 9: '9',
    9.5: '9.5', 10: '10',
  }
  const [hover, setHover] = React.useState(-1)

  return (
    <Box>
      <Typography>{name}</Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Rating
          name="{name}" max={10} precision={0.5} size="large"
          value={value}
          onChange={(event, newValue) => { setValue(newValue) }}
          onChangeActive={(event, newHover) => { setHover(newHover) }} />
        <RatingIcon score={Number(labels[hover !== -1 ? hover : value])} />
      </Stack>
    </Box>)
}

function RatingForm (props) {
  const { courseName, setOpen, id, trigger, setTrigger } = props
  const { ratingStore } = useStore()
  const [teachingValue, setTeachingValue] = React.useState(5)
  const [learningValue, setLearningValue] = React.useState(5)
  const [wordloadValue, setWordloadValue] = React.useState(5)
  const [difficultyValue, setDifficultyValue] = React.useState(5)


  let average = (teachingValue + learningValue + wordloadValue + difficultyValue) / 4

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const token = getToken()
    try {
      await ratingStore.addRating(
        {
          content: data.get('comment'),
          stars: {
            teacher: teachingValue,
            learning: learningValue,
            workload: wordloadValue,
            difficulty: difficultyValue
          }
        }, id, token)
    } catch (e) {
      console.log(e)
    }
    setTrigger(!trigger)
    setOpen(false)
  }

  return (
    <Box >
      <DialogTitle>
        <IconButton onClick={() => setOpen(false)} sx={{ left: "95%", top: "-10px" }}><CloseIcon /></IconButton>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-around">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>{courseName}</Typography>
          <RatingIcon field="Overall Rating" score={average} />
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={1} sx={{ ml: "20px" }}>
          <RatingBar name="Teaching" value={teachingValue} setValue={setTeachingValue} />
          <RatingBar name="Learning" value={learningValue} setValue={setLearningValue} />
          <RatingBar name="Wordload" value={wordloadValue} setValue={setWordloadValue} />
          <RatingBar name="Difficulty" value={difficultyValue} setValue={setDifficultyValue} />
          <Typography>Add a comment</Typography>
          <Stack spacing={3} component="form" onSubmit={handleSubmit}>
            <TextareaAutosize
              name="comment"
              minRows={5}
              required
              placeholder="Tell us what you think..."
              style={{ width: "99%" }}
            />
            <Button
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Box >
  )
}

export default RatingForm