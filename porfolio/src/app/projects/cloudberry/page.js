
'use client';
import { useEffect, useState } from "react";

import { Navbar } from "@/components/Navbar";
import { Box, Button, ImageList, ImageListItem, Skeleton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const lofiData = [

  {
    img: '/cloudberry-lo-fi-mobile-involved.webp',
    title: 'Cloudberry lo-fi Mobile Get Involved Section',
  },
  {
    img: '/cloudberry-lo-fi-desktop-involved.webp',
    title: 'Cloudberry lo-fi Desktop Get Involved Section',
  },
  {
    img: '/cloudberry-lo-fi-mobile-hero.webp',
    title: 'Cloudberry lo-fi Mobile Hero Page',
  },
  {
    img: '/cloudberry-lo-fi-desktop-shop.webp',
    title: 'Cloudberry lo-fi Desktop Shop Page',
  },
  {
    img: '/cloudberry-lo-fi-desktop-hero.webp',
    title: 'Cloudberry lo-fi Desktop Hero Page',
  },
  {
    img: '/cloudberry-lo-fi-mobile-shop.webp',
    title: 'Cloudberry lo-fi Mobile Shop Page',
  },

];

const hifiData = [
  {
    img: '/cloudberry-desktop-hero.webp',
    title: 'Cloudberry Desktop Hero Section',
  },
  {
    img: '/cloudberry-mobile-hero.webp',
    title: 'Cloudberry Mobile Hero Section',
  },
  {
    img: '/cloudberry-desktop-offerings.webp',
    title: 'Cloudberry Desktop Offerings Section',
  },
 
  {
    img: '/cloudberry-mobile-offerings.webp',
    title: 'Cloudberry Mobile Offerings Section',
  },
  {
    img: '/cloudberry-desktop-upick-farm.webp',
    title: 'Cloudberry Desktop Upick Farm Section',
  },
  {
    img: '/cloudberry-mobile-upick-farm.webp',
    title: 'Cloudberry Mobile U-Pick Farm Section',
  },
 
];


export default function Focus() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Navbar />
      <Box
        sx={{
          maxWidth: 1248,
          width: "100%",
          mx: "auto",
          pt: '100px',
          pb: 8,
          px: { sm: 6, lg: 8 },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 3,
            fontSize: 'clamp(2rem, 1.0809rem + 2.9412vw, 3.375rem)', 
          }}
        >
          Farm Design Project
        </Typography>
        <Skeleton sx={{ backgroundColor: "#fff687", width: '40%' }} />
        <Skeleton sx={{ backgroundColor: "#e6bbff", width: '95%', marginLeft: 'auto' }} />


        <Typography
          variant="h6" component="p"
          sx={{ my: 5, px: 2 }}
        >
          This is an academic project where we design a farm website named Cloudberry from scratch using the wireframing library from Figma.
        </Typography>
        {/* :o-fi Wireframe */}
        <Stack
          spacing={4}
          sx={{
            mb: 6,
          }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              my: 5,
              px: 2
            }}
          >
            Low Fidelity Wireframe Design
          </Typography>
            <ImageList
              sx={{
                width: "1000",
                margin: "0 auto",
                backgroundColor: "#ffffff",
                padding: 2,
                border: "1px solid #f5f5f5",
                boxShadow: "0px 3px 5px #fff687",
                alignSelf: "center"
              }}
              variant="masonry"
              cols={3}
            >
              {lofiData.map((item) => (
                <ImageListItem key={item.img}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={200}
                    loading="lazy"
                  >

                  </Image>
                </ImageListItem>
              ))}
            </ImageList>

          <Box sx={{ my: 5 }}>
            <iframe
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: '8px'
              }}
              width="100%"
              height="500"
              src="https://embed.figma.com/design/eHs0UpyBATyoySyIZI9n8V/Lo-FI-Wireframe?node-id=1530-4611&embed-host=share"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </Box>
        </Stack>

        <Typography
          variant="h5" component="p"
          sx={{ mb: 5, px: 2 }}
        >
          For the second part, we were tasked to make a hi-fidelity wireframe using a given layout by the Instructor.
        </Typography>

        <Stack
          spacing={4}
          sx={{
            mb: 6,
          }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              my: 5,
              px: 2
            }}
          >
            Hi-Fidelity Wireframe
          </Typography>
            <ImageList
              sx={{
                width: "1000",
                margin: "0 auto",
                backgroundColor: "#ffffff",
                padding: 2,
                border: "1px solid #f5f5f5",
                boxShadow: "0px 3px 5px #fff687",
                alignSelf: "center"
              }}
              variant="masonry"
              cols={3}
            >
              {hifiData.map((item) => (
                <ImageListItem key={item.img}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={200}
                    loading="lazy"
                  >

                  </Image>
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>

        <Box sx={{ mb: 5 }}>
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: '8px'
            }}
            width="100%"
            height="800"
            src="https://embed.figma.com/design/U1piprHnEkQxSxOrPazG7j/Cloudberry-Hi-Fi-Wireframe?node-id=24-88&embed-host=share"
            loading="lazy"
            allowFullScreen
          ></iframe>


          <Typography
            variant="h6" component="p"
            sx={{ my: 5, px: 2 }}
          >
            At the end of this project, I became familiar with Figma&apos;s features: text styles, grid, components and the vast offerings of Figma&apos;s community library.
          </Typography>

          <Stack direction="row" justifyContent="space-between" width="100%" mt={4} >
            <Link href="/projects/swatchlab" aria-label="View Fabric Catalogue CRUD project">
              <Button variant="contained" sx={{
                backgroundColor: "#fff687", color: "#000000"
              }}>Previous Project</Button>
            </Link>
            <Link href="/projects/focus" aria-label="View Photography Website Project">
              <Button variant="contained" sx={{
                backgroundColor: "#e6bbff", color: "#000000"
              }}>Next Project</Button>
            </Link>
          </Stack>

        </Box>
      </Box>
    </>
  );
}

