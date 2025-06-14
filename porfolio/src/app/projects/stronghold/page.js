
'use client';
import { useEffect, useState } from "react";


import { Navbar } from "@/components/Navbar";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, ImageList, ImageListItem, List, ListItem, ListItemText, Skeleton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";


export default function Stronghold() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


  const itemData = [
    { img: '/stronghold-home-page.webp', title: 'Stronghold Home Page' },
    { img: '/stronghold-memorials.webp', title: 'Stronghold Memorials' },
    { img: '/Stronghold-testimonials.webp', title: 'Stronghold Testimonials' },
  ];

  return (
    <>
      <Navbar />
      <Box
        sx={{
          maxWidth: 1248,
          minWidth: 320,
          width: "100%",
          mx: "auto",
          pt: '100px',
          pb: 8,
          px: { sm: 6, lg: 8 },

        }}
      >

        <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
          <Typography
            component="h1"
            sx={{
              mb: 3,
              wordWrap: "break-word",
              fontSize: 'clamp(2rem, 1.0809rem + 2.9412vw, 3.375rem)',
            }}

          >
            Mental Health Support Website
          </Typography>
          <Link href="https://stronghold.web.dmitcapstone.ca/" passHref
            aria-label="Visit the mental health support website">
            <Button variant="contained" sx={{
              backgroundColor: "pink", color: "#000000",
            }} aria-label="View stronghold Website">View Website</Button>
          </Link>
        </Stack>

        <Skeleton sx={{ backgroundColor: "#fff687", width: '40%' }} />
        <Skeleton sx={{ backgroundColor: "#e6bbff", width: '95%', marginLeft: 'auto' }} />


        <Typography
          variant="h6" component="p"
          sx={{ my: 5, px: 2 }}
        >
          This capstone project involved developing a mental health support website tailored for first responders. The primary challenge was the absence of existing content or design guidelines, requiring our team to conceptualize and create the entire structure, content, and design from the ground up.
        </Typography>

        <Typography
          variant="h5" component="h2"
          sx={{
            mt: 5,
            mb: 2,
            px: 2,
            fontSize: 'font-size: clamp(1.5rem, 0.6644rem + 2.6738vw, 2.75rem)'
          }}
        >
          Members:
        </Typography>
        <Stack
          direction="row"
          spacing={6}
          mb={5}
          justifyContent="center"
        >
          <Card sx={{ width: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/sydney.png"
                alt="sydney's photo"
                sx={{
                  height: 200,

                  objectFit: "cover"
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sydney Kampjes
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lead Laravel Developer
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/sam.png"
                alt="sam's photo"
                sx={{
                  height: 200,
                  objectFit: "cover"
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sam Aquino
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Database Designer, Support Developer & Deployment
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/cherry.webp"
                alt="cherry's photo"
                sx={{
                  height: 200,
                  objectFit: "cover"
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cherry Santos
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  UX/UI Designer & Support Developer
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>


        <Typography
          variant="h5" component="h2"
          sx={{
            mt: 5,
            mb: 2,
            px: 2,
            fontSize: 'font-size: clamp(1.5rem, 0.6644rem + 2.6738vw, 2.75rem)'
          }}
        >
          Entity Relationship Diagram:
        </Typography>

        <Typography
          variant="h6" component="p"
          sx={{ my: 5, px: 2 }}
        >
          I was responsible for designing the database for this project. Creating the ERD was particularly challenging at first due to the lack of existing content and the early-stage nature of the business model. After several iterations and refinements, this is the finalized ERD for the website.
        </Typography>

        <Typography
          variant="h6" component="p"
          sx={{ my: 5, px: 2 }}
        >
          In addition to designing the ERD, I was responsible for converting it into Laravel-compatible relationships using Eloquent ORM. I also set up the corresponding migration files, seeders, and factories to support database structure, testing, and initial data population.
        </Typography>

        <Image
          src='/stronghold-erd.webp'
          alt="stronghold ERD design"
          width={1248}
          height={400}
          priority
        />

        <Typography
          variant="h5" component="h2"
          sx={{
            mt: 5,
            mb: 2,
            px: 2,
            fontSize: 'font-size: clamp(1.5rem, 0.6644rem + 2.6738vw, 2.75rem)'
          }}
        >
          Output:
        </Typography>

        <Box sx={{ width: '75vw', height: 'auto', mx: 'auto' }}>
          <ImageList
            variant="masonry"
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={248}
                  height={200}
                  layout="responsive"
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>


        <Typography
          variant="h6" component="p"
          sx={{ my: 5, px: 2 }}
        >

        </Typography>


        <Stack direction="row" justifyContent="space-between" width="100%" mt={4}>
          <Link href="/projects/st-philip" passHref aria-label="View Gallery Project">
            <Button variant="contained" sx={{
              backgroundColor: "#fff687", color: "#000000"
            }} >Previous Project</Button>
          </Link>
          <Link href="/projects/swatchlab" passHref aria-label="View Farm Design Project">
            <Button variant="contained" sx={{
              backgroundColor: "#e6bbff", color: "#000000"
            }} >Next Project</Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
