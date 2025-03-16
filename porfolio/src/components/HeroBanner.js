import { Box, Stack, Typography } from "@mui/material"

export const HeroBanner = () => {
  return (
    <Stack direction='row' width='100%' sx={{backgroundColor: 'blue'}}>
      <Box sx={{ flexGrow: 1, backgroundColor: 'green'}}>
        <Typography variant='h1'>Hello</Typography>
        <Typography variant='h1'>I m Sam</Typography>
        </Box>
      <Box sx={{ backgroundColor: 'yellow'}}>img placeholder</Box>
    </Stack>
  )
}
