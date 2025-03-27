import { Box, Card, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';


export const VolunteerList = () => {
  const projects = [
    {
      image: 'naitsa-logo.png',
      imageAltText: 'NAITSA logo',
      title: 'Blood Drive for Canadian Blood Services (NAITSA, February 12, 2024',
      description: "Volunteered as a blood donor at NAITSA's blood donation drive, contributing to efforts to save lives and support community health initiatives.",
    },
    {
      image: 'iicc-logo.jpg',
      imageAltText: 'International and Intercultural Community Center Logo',
      title: 'Winter Welcome Team (IICC, January 4-9, 2024)',
      description: "Volunteered to provide a welcome infor package to new students to help them acclimate to NAIT and Canada.",
    },
  ]

  return (
    <Box
      sx={{
        paddingX: {
          xs: 0, sm: 1, md: 3, lg: 8
        },
        paddingY: {
          xs: 4, lg: 8
        }
      }}
    >
      <Grid container spacing={{ xs: 8 }} sx={{ justifyContent: 'center' }}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, sm: 8, md: 6 }} key={index}>
              <Card
                elevation={4}
                sx={{
                  display: 'flex',
                  flexDirection: "column",
                  height: 'auto',
                  width: '100%',
                  padding: 2,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 200, width: '100%' }}
                  image={project.image}
                  alt={project.imageAltText}
                />
                <CardContent>
                  <Typography
                    gutterBottom variant="h5"
                    component="div"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: 'text.secondary' }}
                  >
                    {project.description}
                  </Typography>
                 
                </CardContent>
              </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
