


import { Navbar } from "@/components/Navbar";
import { Box, Button, ImageList, ImageListItem, Skeleton, Stack, Typography } from "@mui/material";
import Link from "next/link";


export default function SomethingBig() {
  
const itemData = [
  {
    img: '/gallery-desktop-1.jpg',
    title: 'Desktop Hero Banner',
  },
  {
    img: '/gallery-desktop-2.jpg',
    title: 'Desktop Newest Artists Section',
  },
  {
    img: '/gallery-desktop-3.jpg',
    title: 'Desktop Celebrate Section',
  },
  {
    img: '/gallery-desktop-4.jpg',
    title: 'Desktop Footer',
  },
  {
    img: '/gallery-mobile-1.png',
    title: 'Mobile Hero Banner',
  },
  {
    img: '/gallery-mobile-3.png',
    title: 'Mobile Celebrate Section',
  },
  {
    img: '/gallery-mobile-2.png',
    title: 'Mobile Newest Artists Section',
  },
  {
    img: '/gallery-mobile-4.png',
    title: 'Mobile Footer',
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
          px: 8,        

        }}
      >
    
        <Stack direction="row" spacing={4} sx={{alignItems: "center"}}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            mb: 3,
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" }, 
            wordWrap: "break-word" 
          }}  
    
        >
          Gallery Website
        </Typography>
        <Link href="https://sheaqu.dreamhosters.com/projects/something-big-library/" passHref>
        <Button variant="contained" sx={{backgroundColor:"pink", color: "#000000"
         }}>View Website</Button>
        </Link>
        </Stack>
       
        <Skeleton sx={{backgroundColor: "#fff687", width: '40%'}}/>
        <Skeleton sx={{backgroundColor: "#e6bbff", width: '95%', marginLeft: 'auto'}}/>
        
     
        <Typography 
             variant="h5" component="p" 
          sx={{ my: 5, px: 2 }} 
        >
          This is an academic project where we were tasked to design the mobile view of a hypothetical gallery website. 
        </Typography>
        
        <Box sx={{ width: '75vw', height: '450', overflowY: 'scroll', padding: 2, mx: "auto"}}>
      <ImageList
        variant="masonry"
        sx={{
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)', // 1 column on small screens
            sm: 'repeat(2, 1fr)', // 2 columns on small-medium screens
            md: 'repeat(3, 1fr)', // 3 columns on medium screens
            lg: 'repeat(4, 1fr)', // 4 columns on large screens
          },
          gap: 8,
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>


   
        <Typography 
          variant="h5" component="p" 
          sx={{ my: 5, px: 2 }}
        >
          I designed the mobile and code it alongside the given desktop view of the gallery website. This project familiarize me to the world of display: grid.
        </Typography>

        <Stack direction="row" justifyContent="space-between" width="100%" mt={4}>
        <Link href="/projects/focus" >
        <Button variant="contained" sx={{backgroundColor:"#fff687", color: "#000000"
         }}>Previous Project</Button>
        </Link>
        <Link href="/projects/swatchlab" >
        <Button variant="contained" sx={{backgroundColor:"#e6bbff", color: "#000000"
         }}>Next Project</Button>
        </Link>
      </Stack>
        </Box>
    </>
  );
}
