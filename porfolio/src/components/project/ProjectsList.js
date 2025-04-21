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
      link: '/projects/cloudberry',
      skills: ['Figma', 'Wireframing'],
    },
    {
      image: 'focus-photography.webp',
      imageAltText: 'focus website in phone and laptop mockups',
      title: 'Photography Website Design Project',
      description: "Designing a photography club website from scratch based on an imaginary client's needs",
      link: '/projects/focus',
      skills: ['Figma', 'Wireframing'],
    },
    {
      image: 'something-big.webp',
      imageAltText: 'made up gallery website in phone and laptop mockups',
      title: 'Gallery Website',
      description: 'Designing the mobile view of a hypothetical gallery and coding both the mobile and desktop view.',
      link: '/projects/something-big',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      image: 'swatchlab.webp',
      imageAltText: 'Fabric catalogue website in phone and laptop mockups',
      title: 'Fabric Catalogue',
      description: 'A Crud application where authenticated users can add, edit and delete fabrics and fun facts',
      link: '/projects/swatchlab',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
    },
    {
      image: 'st-philip.webp',
      imageAltText: 'Church website in phone and laptop mockups',
      title: 'St. Philip Church Website',
      description: "A capstone project where I lead the development of the site and style the majority of the pages following the lead designer's design.",
      link: '/projects/st-philip',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Wordpress'],
    },
    {
      image: 'stronghold.webp',
      imageAltText: 'Video-based mental health support website in phone and laptop mockups',
      title: 'Stronghold Website',
      description: 'A capstone project where I setup and design the database as well as generate dummy data through seeders and factories.',
      link: '/projects/stronghold',
      skills: ['Database Design & Integration', 'Eloquent ORM'],
    },

  ]

  const getChipColor = (skill) => {
    skill = skill.toLowerCase();
    switch (skill) {
      case "figma":
        return "#ffa07a";
      case "wireframing":
        return "#ffd54f";
      case "react":
        return "#d4a6ff";
      case "html":
        return "#ff9ebf";
      case "css":
        return "#ffa500";
      case "javascript":
        return "#ff6f61";
      case "tailwind":
        return "#8e44ad";
      case "bootstrap":
        return "#ffcc66";
      case "wordpress":
        return "#42aaff";
      default:
        return "#ff85d6";
    }
  }
  
  // const getTextColor = (skill) => {
  //   skill = skill.toLowerCase();
  //   switch (skill) {
  //     case "figma":
  //       return "#ffffff";
  //     case "wireframing":
  //       return "#000000";
  //     case "react":
  //       return "#ffffff";
  //     case "html":
  //       return "#ffffff";
  //     case "css":
  //       return "#000000";
  //     case "javascript":
  //       return "#ffffff";
  //     case "tailwind":
  //       return "#ffffff";
  //     case "react":
  //       return "#000000";
  //     case "wordpress":
  //       return "#ffffff";
  //     default:
  //       return "#ffffff";
  //   }
  // }

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
                    component="h3"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
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
                          color: 'black',
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
