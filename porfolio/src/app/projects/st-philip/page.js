
'use client';
import { useEffect, useState } from "react";


import { Navbar } from "@/components/Navbar";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, ImageList, ImageListItem, List, ListItem, ListItemText, Skeleton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";


export default function StPhilip() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const itemData = [
    { img: '/st-philip-homepage.webp', title: 'St.Philip HomePage' },
    { img: '/st-philip-committee.webp', title: 'St.Philip Committee Page' },
    { img: '/st-philip-committee-single.webp', title: 'St.Philip Single Committee Page' },
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
            Church Website Redesign
          </Typography>
          <Link href="https://st-philip-church.web.dmitcapstone.ca/" passHref
            aria-label="Visit the church website">
            <Button variant="contained" sx={{
              backgroundColor: "pink", color: "#000000",
            }} aria-label="View Church Website">View Website</Button>
          </Link>
        </Stack>

        <Skeleton sx={{ backgroundColor: "#fff687", width: '40%' }} />
        <Skeleton sx={{ backgroundColor: "#e6bbff", width: '95%', marginLeft: 'auto' }} />


        <Typography
          variant="h6" component="p"
          sx={{ my: 5, px: 2 }}
        >
          This is a capstone project where we were tasked to redesign an existing church website to better align with their target audience (younger generation).
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
                  Support Developer
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
                  Lead Wordpress Developer
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
                  Support Developer & Lead Designer
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
          We are on a time crunch (literally just have 1 month to develop). But we persevered and push through the deadline and the pressure. Looking back, I will make these improvements:
        </Typography>
        <List>
          <ListItem>
            <ListItemText>1. Use a different starter theme files with updated dependencies for smoother development.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>2. Implemented AJAX for the online shop</ListItemText>
          </ListItem>
        </List>

        <Stack direction="row" justifyContent="space-between" width="100%" mt={4}>
          <Link href="/projects/something-big" passHref aria-label="View Gallery Project">
            <Button variant="contained" sx={{
              backgroundColor: "#fff687", color: "#000000"
            }} >Previous Project</Button>
          </Link>
          <Link href="/projects/stronghold" passHref aria-label="View Farm Design Project">
            <Button variant="contained" sx={{
              backgroundColor: "#e6bbff", color: "#000000"
            }} >Next Project</Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
