import { Box,Skeleton,Typography } from '@mui/material'
import React from 'react'
import { VolunteerList } from './VolunteerList';

export const Volunteer = () => {
  return (
      <Box
      id="volunteer"
        sx={{
          maxWidth: 1248,
          width: "100%",
          mx: "auto",
          paddingTop: '171px',
          paddingBottom: 8,
        }}
      >
       <Typography variant='h2'>Volunteer Work</Typography>
       <Skeleton sx={{backgroundColor: "#fff687", width: '40%'}}/>
      <Skeleton sx={{backgroundColor: "#e6bbff", width: '95%', marginLeft: 'auto'}}/>
       <VolunteerList />
      </Box>
  )
}
