'use client';

import { useEffect, useState } from 'react';
import { Box, Button, ImageList, ImageListItem, Skeleton, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';


export default function Focus() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const itemData = [
    {
      img: '/focus-style-guide.webp',
      title: 'Style Guide Cover',
    },
    {
      img: '/focus-style-guide-1.webp',
      title: 'Style Guide Color Pallette Page',
    },
    {
      img: '/focus-style-guide-2.webp',
      title: 'Style Guide Typography Page',
    },
    {
      img: '/focus-style-guide-3.webp',
      title: 'Style Guide Mobile Grid System Page',
    },
    {
      img: '/focus-style-guide-4.webp',
      title: 'Style Guide Desktop Grid System Page',
    },
    {
      img: '/focus-style-guide-5.webp',
      title: 'Style Guide Components Page',
    },
    {
      img: '/focus-style-guide-6.webp',
      title: 'Style Guide Spacing Page',
    },
    {
      img: '/focus-style-guide-7.webp',
      title: 'Style Guide Images Page',
    },
    {
      img: '/focus-style-guide-8.webp',
      title: "Style Guide Do's and Dont's Page",
    },
  ];

  const pageData = [
    {
      img: '/focus-desktop-nav.webp',
      title: 'Desktop Navigation',
    },
    {
      img: '/focus-mobile-nav.webp',
      title: 'Mobile Navigation',
    },
    {
      img: '/focus-desktop-hero.webp',
      title: 'Desktop Hero Banner Section',
    },
    {
      img: '/focus-mobile-hero.webp',
      title: 'Mobile Hero Banner Section',
    },
    {
      img: '/focus-desktop-events.webp',
      title: 'Desktop Events Section',
    },
    {
      img: '/focus-mobile-events.webp',
      title: 'Mobile Events Section',
    },
  ];


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
            wordWrap: "break-word"
          }}
        >
          Photography Website Design Project
        </Typography>
        <Skeleton sx={{ backgroundColor: "#fff687", width: '40%' }} />
        <Skeleton sx={{ backgroundColor: "#e6bbff", width: '95%', marginLeft: 'auto' }} />


        <Typography
          variant="h6" component="p"
          sx={{ my: 5, px: 2 }}
        >
          This is an academic project where we were tasked with creating a high-fidelity landing page and style guide for a photography club named FOCUS.
        </Typography>

        {/* Style Guide */}
        <Stack
          spacing={2}
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
            Style Guide
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              my: 5,
              px: 2
            }}
          >
            I made sure that colors passed the WCAG contrast ratio and that spacing is enough to let the elements breath for better UX design experience.
          </Typography>
          <ImageList
            sx={{
              width: '100%',
              height: 450,
              margin: "0 auto",
              backgroundColor: "#ffffff",
              padding: 2,
              border: "1px solid #f5f5f5",
              boxShadow: "0px 3px 5px #e6bbff",
              alignSelf: "center"
            }}
            rowHeight={400}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={250}
                  height={400}
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                  }}
                >

                </Image>
              </ImageListItem>
            ))}
          </ImageList>
        </Stack>
        {/* HI-FI Landing Page */}
        <Stack
          spacing={2}
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
            Hi-Fi Landing Page
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              my: 5,
              px: 2
            }}
          >
            My design is inspired by <span style={{ fontStyle: 'italic' }}>the Swab The World</span>. I loved their bold colors, large font sizes, and their simple navigation with a hamburger button for both mobile and desktop view.
          </Typography>
          <ImageList
            sx={{
              width: "100%",
              margin: "0 auto",
              backgroundColor: "#ffffff",
              padding: 2,
              border: "1px solid #f5f5f5",
              boxShadow: "0px 3px 5px #fff687",
              alignSelf: "center"
            }}
          
          >
            {pageData.map((item) => (
              <ImageListItem key={item.img}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={250}
                  height={400}
                  loading="lazy"
                >

                </Image>
              </ImageListItem>
            ))}
          </ImageList>
          <Stack
            direction="row"
            sx={{
              justifyContent: "center"
            }}
          >
            <iframe
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: '8px'
              }}
              width="100%"
              height="800"
              src="https://embed.figma.com/design/7hrER0tpNqIFVHDYlIbmSB/high-fidelity-landing-page?node-id=2187-1369&embed-host=share"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </Stack>
        </Stack>

        <Box
          sx={{
            mb: 5,
          }}
        >
          <Typography
            variant="h6" component="p"
            sx={{ my: 5, px: 2 }}
          >
            This is one of the most challenging projects I&apos;ve had at NAIT. It&apos;s difficult to come up with a modern design that encapsulates the branding of the club. I&apos;ve learned how to create a styleguide, become more familiar accebility rules and figma&apos;s variables and components.
          </Typography>

          <Stack direction="row" justifyContent="space-between" width="100%" mt={4}>
            <Link href="/projects/cloudberry" aria-label="View Farm Design Project" >
              <Button variant="contained" sx={{
                backgroundColor: "#fff687", color: "#000000"
              }}>Previous Project</Button>
            </Link>
            <Link href="/projects/something-big" aria-label="View Gallery Project">
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
