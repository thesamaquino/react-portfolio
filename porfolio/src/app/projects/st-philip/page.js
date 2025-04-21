
'use client';
import { useEffect, useState } from "react";


import { Navbar } from "@/components/Navbar";
import { Box, Button, ImageList, ImageListItem, Skeleton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";


export default function StPhilip() {

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

        <Typography variant="h1">Coming soon!</Typography>
      </Box>
    </>
  );
}
