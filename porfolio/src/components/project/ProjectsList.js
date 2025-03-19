import { Box, Card, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link';
import Grid from '@mui/material/Grid2';


export const ProjectsList = () => {
  const projects = [
    {
      image: 'cloudberry.webp',
      imageAltText: 'cloudberry website in phone and laptop mockups',
      title: 'Farm Design Project',
      description: "Designing the hi-fi version of the the farm website and wireframing(lo-fi) of our own layout design",
      link: '#',
      skills: ['Figma', 'Wireframing'],
    },
    {
      image: 'focus-photography.webp',
      imageAltText: 'focus website in phone and laptop mockups',
      title: 'Photography Website Design Project',
      description: "Designing a photography club website from scratch based on an imaginary client's needs",
      link: '#',
      skills: ['Figma', 'Wireframing'],
    },
    {
      image: 'something-big.webp',
      imageAltText: 'made up gallery website in phone and laptop mockups',
      title: 'Gallery Website',
      description: 'Coding and designing the layout of the mobile view',
      link: 'https://sheaqu.dreamhosters.com/projects/something-big-library/',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },

  ]

  const getChipColor = (skill) => {
    skill = skill.toLowerCase();
    switch (skill) {
      case "figma":
        return "#E57373";
      case "wireframing":
        return "#4DB6AC";
      case "react":
        return "#FFB74D";
      case "html":
        return "#81C784";
      case "css":
        return "#FFD54F";
      case "javascript":
        return "#64B5F6";
      default:
        return "#7986CB";
    }
  }

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
      <Grid container spacing={{ xs: 2 }} sx={{ justifyContent: 'center' }}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, sm: 8, md: 6 }} key={index}>
            <Link
              href={project.link}
              target="_blank"
              sx={{ width: '100%' }}
            >
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

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 2 }}
                  >
                    {project.skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        sx={{
                          backgroundColor: getChipColor(skill)
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
