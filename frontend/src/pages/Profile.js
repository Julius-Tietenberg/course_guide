import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import HeadBar from "../components/HeadBar"
import Button from "@mui/material/Button"

function Profile () {
  return (
    <Box>
      <HeadBar hiddenButton={'my'} />
      <Box sx={{ p: "5%", bgcolor: "rgb(25 118 210 / 8%)" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* my course */}
          <Grid item xs={8}>
            <Paper sx={{ p: "10px" }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Typography variant="h5" >My Courses</Typography>
                <Button variant="contained">Sort</Button>
              </Stack>
            </Paper>
          </Grid>
          {/* my profile */}
          <Grid item xs={4}>
            <Paper sx={{ p: "10px", minWidth: "285px" }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                {/* <Stack> */}
                <Typography variant="h5" >My profile</Typography>
                <Button variant="outlined">Edite Profile</Button>
                {/* </Stack> */}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box >)
}

export default Profile