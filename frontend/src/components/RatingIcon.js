import * as React from "react"
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import Tooltip from '@mui/material/Tooltip'


function RatingIcon (props) {
  const { field, score } = props
  let ratingColor = "123"

  if (Number(score) <= 3.5) {
    ratingColor = "#e76f51"
  } else if (Number(score) <= 6.5) {
    ratingColor = "#e9c46a"
  } else if (Number(score) <= 10) {
    ratingColor = "#2a9d8f"
  }

  return (
      <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
        <Tooltip title="Current average rating.">
          <Typography variant="subtitle1" sx={{ paddingLeft:"6px", color: ratingColor, fontSizeAdjust:".58" }} >
          {field}
          </Typography>
        </Tooltip>
        <Avatar sx={{ fontWeight:"bold", bgcolor: ratingColor }}>{score}</Avatar>
     </Stack>
    )
}

export default RatingIcon