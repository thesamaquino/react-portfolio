
'use client';
import { useEffect, useState } from "react";


import { Navbar } from "@/components/Navbar";
import { Box, Button, ImageList, ImageListItem, Skeleton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";


export default function Swatchlab() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


  const itemData = [
    { img: '/swatchlab-admin.webp', title: 'Swatchlab Admin Page' },
    { img: '/swatchlab-add-fabric.webp', title: 'Swatchlab Add Fabric Page' },
    { img: '/swatchlab-fabric-gallery.webp', title: 'Swatchlab Fabric Gallery Page' },
    { img: '/swatchlab-delete-funfact.webp', title: 'Swatchlab Delete Fun Fact  Page' },
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
            variant="h2"
            component="h1"
            sx={{
              mb: 3,
              wordWrap: "break-word",
            }}

          >
            Fabric Catalogue CRUD Website
          </Typography>
          <Link href="https://sheaqu.dreamhosters.com/portfolio/public/" passHref
          aria-label="Visit the fabric catalogue website">
            <Button variant="contained" sx={{
              backgroundColor: "pink", color: "#000000",
            }} aria-label="View Fabric Catalogue Website">View Website</Button>
          </Link>
        </Stack>

        <Skeleton sx={{ backgroundColor: "#fff687", width: '40%' }} />
        <Skeleton sx={{ backgroundColor: "#e6bbff", width: '95%', marginLeft: 'auto' }} />


        <Typography
          variant="h6" component="p"
          sx={{ my: 5, px: 2 }}
        >
          This is an academic project where we were tasked with creating and designing our own CRUD application.
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
          I chose to create a Fabric Catalogue where an authenticated user can add, edit, and delete fabrics and fun facts. This project taught me the ins and outs of PHP, as well as the best UX/UI design practices.
        </Typography>

        <Stack direction="row" justifyContent="space-between" width="100%" mt={4}>
          <Link href="/projects/something-big" passHref aria-label="View Gallery Project">
            <Button variant="contained" sx={{
              backgroundColor: "#fff687", color: "#000000"
            }} >Previous Project</Button>
          </Link>
          <Link href="/projects/cloudberry" passHref aria-label="View Farm Design Project">
            <Button variant="contained" sx={{
              backgroundColor: "#e6bbff", color: "#000000"
            }} >Next Project</Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
