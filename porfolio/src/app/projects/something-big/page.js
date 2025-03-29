

'use client';
import { useEffect, useState } from "react";

import { Navbar } from "@/components/Navbar";
import { Box, Button, ImageList, ImageListItem, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


export default function SomethingBig() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const itemData = [

    {
      img: '/gallery-desktop-2.webp',
      title: 'Desktop Newest Artists Section',
    },
    {
      img: '/gallery-desktop-3.webp',
      title: 'Desktop Celebrate Section',
    },
    {
      img: '/gallery-desktop-4.webp',
      title: 'Desktop Footer',
    },
    {
      img: '/gallery-mobile-1.webp',
      title: 'Mobile Hero Banner',
    },
    {
      img: '/gallery-mobile-3.webp',
      title: 'Mobile Celebrate Section',
    },
    {
      img: '/gallery-desktop-1.webp',
      title: 'Desktop Hero Banner',
    },
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

        <Stack
          direction="row"
          spacing={4}
          sx={{ alignItems: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 3,
              wordWrap: "break-word"
            }}

          >
            Gallery Website
          </Typography>
          <Link href="https://sheaqu.dreamhosters.com/projects/something-big-library/" passHref aria-label="View Gallery Website">
            <Button variant="contained" sx={{
              backgroundColor: "pink", color: "#000000"
            }}>View Website</Button>
          </Link>
        </Stack>

        <Skeleton
          sx={{
            backgroundColor: "#fff687",
            width: '40%'
          }} />
        <Skeleton
          sx={{
            backgroundColor: "#e6bbff",
            width: '95%',
            marginLeft: 'auto'
          }} />


        <Typography
          variant="h6"
          component="p"
          sx={{ my: 5, px: 2 }}
        >
          This is an academic project in which we were tasked with designing the mobile view of a hypothetical gallery website.
        </Typography>

        <Box sx={{ width: '70vw', height: '450', padding: 2, mx: "auto" }}>
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
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>



        <Typography
          variant="h6"
          component="p"
          sx={{
            my: 5,
            px: 2
          }}
        >
          I designed the mobile version and coded it alongside the given desktop view of the gallery website. This project familiarized me with the world of grid layout.
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          width="100%"
          mt={4}>
          <Link href="/projects/focus" aria-label="View Photography Website Project">
            <Button variant="contained" sx={{
              backgroundColor: "#fff687", color: "#000000"
            }}>Previous Project</Button>
          </Link>
          <Link href="/projects/swatchlab" aria-label="View Fabric Catalogue CRUD Project">
            <Button variant="contained" sx={{
              backgroundColor: "#e6bbff", color: "#000000"
            }} >Next Project</Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
